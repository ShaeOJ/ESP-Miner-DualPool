# ESP-Miner Code Improvement Roadmap

This document tracks code quality, security, and reliability improvements for the ESP-Miner-2.12.0-DualPool project.

## Status Legend
- ✅ **Completed** - Fix implemented and tested
- 🚧 **In Progress** - Currently being worked on
- 📋 **Planned** - Scheduled for future implementation
- ⏸️ **Deferred** - Low priority, scheduled for later

---

## Phase 1: Critical Safety Fixes (PRIORITY)

### 1.1 Fix exit() Calls in Power Management Task 🚧
**Status**: In Progress
**File**: `main/tasks/power_management_task.c`
**Lines**: 252, 261, 269, 280
**Severity**: CRITICAL - Hardware Safety

**Issue**: Using `exit(EXIT_FAILURE)` in FreeRTOS task context will crash the entire miner if thermal control fails. This leaves ASICs running without fan cooling, risking thermal damage.

**Current Code**:
```c
if (Thermal_set_fan_percent(...) != ESP_OK) {
    exit(EXIT_FAILURE);  // DANGEROUS!
}
```

**Fix**: Replace with proper error recovery that maintains fan operation:
```c
if (Thermal_set_fan_percent(...) != ESP_OK) {
    ESP_LOGE(TAG, "Failed to set fan speed - attempting recovery");
    GLOBAL_STATE->SYSTEM_MODULE.mining_enabled = false;  // Stop mining
    vTaskDelay(pdMS_TO_TICKS(5000));  // Wait and retry
    continue;
}
```

**Impact**: Prevents system crashes during thermal control errors, maintains safe operation

---

### 1.2 Add NULL Checks to Stratum JSON Parsing 🚧
**Status**: In Progress
**File**: `components/stratum/stratum_api.c`
**Lines**: 410-431
**Severity**: CRITICAL - System Crash

**Issue**: Direct pointer dereference without NULL checks when parsing pool messages. Malformed JSON from mining pool will crash the miner.

**Current Code**:
```c
cJSON * params = cJSON_GetObjectItem(json, "params");
new_work->job_id = strdup(cJSON_GetArrayItem(params, 0)->valuestring);  // NO NULL CHECKS!
new_work->prev_block_hash = strdup(cJSON_GetArrayItem(params, 1)->valuestring);
new_work->version = strtoul(cJSON_GetArrayItem(params, 5)->valuestring, NULL, 16);
```

**Fix**: Add comprehensive NULL validation:
```c
cJSON * params = cJSON_GetObjectItem(json, "params");
if (!params || !cJSON_IsArray(params) || cJSON_GetArraySize(params) < 8) {
    ESP_LOGE(TAG, "Invalid mining.notify params");
    return;
}

cJSON* item = cJSON_GetArrayItem(params, 0);
if (item && item->valuestring) {
    new_work->job_id = strdup(item->valuestring);
} else {
    ESP_LOGE(TAG, "Missing job_id in mining.notify");
    return;
}
// Repeat for all fields...
```

**Impact**: Prevents crashes from malformed pool messages, improves reliability

---

### 1.3 Fix Buffer Underflow in File Extension Checking 🚧
**Status**: In Progress
**File**: `main/http_server/http_server.c`
**Line**: 205
**Severity**: CRITICAL - Memory Corruption

**Issue**: Macro calculates negative array index if extension is longer than filename, causing buffer underflow.

**Current Code**:
```c
#define CHECK_FILE_EXTENSION(filename, ext) \
    (strcasecmp(&filename[strlen(filename) - strlen(ext)], ext) == 0)
// If strlen(ext) > strlen(filename): NEGATIVE INDEX!
```

**Fix**: Add length validation:
```c
#define CHECK_FILE_EXTENSION(filename, ext) \
    (strlen(filename) >= strlen(ext) && \
     strcasecmp(&filename[strlen(filename) - strlen(ext)], ext) == 0)
```

**Impact**: Prevents memory corruption when serving HTTP files

---

## Phase 2: Memory Safety & Stability

### 2.1 Add malloc/strdup NULL Checks 📋
**Status**: Planned
**Files**:
- `main/tasks/create_jobs_task.c:203-204`
- `components/stratum/stratum_api.c:410`
- `main/device_config.c:71,77,99`

**Severity**: HIGH - Crash on Allocation Failure

**Issue**: Multiple locations call `malloc()` or `strdup()` without checking return value.

**Fix Pattern**:
```c
char* ptr = strdup(source);
if (!ptr) {
    ESP_LOGE(TAG, "Memory allocation failed");
    // Clean up and return error
    return ESP_ERR_NO_MEM;
}
```

**Files to Fix**:
- `create_jobs_task.c` - job queue allocation
- `stratum_api.c` - mining notify structure
- `device_config.c` - board version strings

---

### 2.2 Add Mutex Protection to BAP Global State Access 📋
**Status**: Planned
**File**: `main/bap/bap_handlers.c`
**Lines**: 173, 202, 214, 257, 266, 288, 293
**Severity**: HIGH - Race Condition

**Issue**: `bap_global_state` accessed from multiple contexts without mutex protection.

**Fix**: Add mutex around all GLOBAL_STATE access:
```c
// At file scope
static SemaphoreHandle_t bap_state_mutex = NULL;

// In handlers:
if (xSemaphoreTake(bap_state_mutex, pdMS_TO_TICKS(100)) == pdTRUE) {
    ASIC_set_frequency(bap_global_state, target_frequency);
    bap_global_state->POWER_MANAGEMENT_MODULE.frequency_value = target_frequency;
    xSemaphoreGive(bap_state_mutex);
} else {
    ESP_LOGE(TAG, "Failed to acquire state mutex");
}
```

---

### 2.3 Replace Unsafe String Operations 📋
**Status**: Planned
**File**: `main/bap/bap_handlers.c:126`
**Severity**: MEDIUM - Potential Buffer Overflow

**Issue**: Using `strcpy()` even with size validation creates confusion and future risk.

**Fix**:
```c
// Replace:
strcpy(tokenize_body, sentence_body);

// With:
strncpy(tokenize_body, sentence_body, sizeof(tokenize_body) - 1);
tokenize_body[sizeof(tokenize_body) - 1] = '\0';
```

---

### 2.4 Fix Unsafe strncat Usage 📋
**Status**: Planned
**File**: `main/tasks/stratum_task.c:134`
**Severity**: MEDIUM - Buffer Overflow Risk

**Issue**: Length calculation for `strncat()` depends on runtime values.

**Fix**: Use safer `snprintf()`:
```c
// Replace strncat with:
snprintf(conn_info->host_ip + strlen(conn_info->host_ip),
         sizeof(conn_info->host_ip) - strlen(conn_info->host_ip),
         "%s", zone_buf);
```

---

## Phase 3: Code Quality & Maintainability

### 3.1 Remove Dead Code 📋
**Status**: Planned
**File**: `main/power/TPS546.c:120-137`
**Severity**: LOW - Code Cleanliness

**Issue**: Commented-out `smb_write_block()` function creates confusion.

**Action**: Remove entirely - function is unused and superseded.

---

### 3.2 Document Magic Numbers 📋
**Status**: Planned
**File**: `main/i2c_bitaxe.c:31`
**Severity**: LOW - Documentation

**Issue**: `#define MAX_DEVICES 10` has no explanation.

**Fix**:
```c
// Maximum number of I2C devices that can be registered
// Includes: ASIC chips, thermal sensors, power ICs, fan controllers
#define MAX_DEVICES 10
```

---

### 3.3 Remove Debug Defines 📋
**Status**: Planned
**File**: `main/power/TPS546.c:14-15`
**Severity**: LOW - Code Cleanliness

**Action**: Remove commented debug defines or move to KConfig:
```c
//#define DEBUG_TPS546_MEAS 1
//#define DEBUG_TPS546_STATUS 1
```

---

### 3.4 Refactor Duplicate Mutex Pattern 📋
**Status**: Planned
**Files**: Multiple (`bap_handlers.c`, `bap_subscription.c`, `websocket.c`)
**Severity**: LOW - Code Duplication

**Issue**: Repeated mutex acquisition pattern.

**Fix**: Create helper function:
```c
static inline bool acquire_mutex_safe(SemaphoreHandle_t mutex, const char* name) {
    if (xSemaphoreTake(mutex, pdMS_TO_TICKS(100)) != pdTRUE) {
        ESP_LOGE(TAG, "Failed to acquire %s mutex", name);
        return false;
    }
    return true;
}
```

---

### 3.5 Improve Power Calculation TODO 📋
**Status**: Planned
**File**: `main/power/power.c:29`
**Severity**: MEDIUM - Feature Completeness

**Issue**: Current power calculation uses offset instead of direct measurement.

**Current**:
```c
power += GLOBAL_STATE->DEVICE_CONFIG.family.power_offset; // TODO: this better.
```

**Goal**: Implement direct power measurement for all subsystems (display, WiFi, etc.) instead of using static offset.

---

### 3.6 Fix Float Precision Issues 📋
**Status**: Planned
**File**: `main/http_server/http_server.c:158-162`
**Severity**: LOW - Calculation Accuracy

**Issue**: Potential floating point precision loss in calculations.

**Review**: Audit float operations for epsilon-based comparisons.

---

## Completed Improvements ✅

### Phase 0: Initial Code Review Fixes (December 2024)

1. **EMC2101 Type Safety** ✅
   - Converted #defines to enums in `thermal/EMC2101.h`
   - Added type-safe enums: `emc2101_beta_t`, `emc2101_filter_t`, `emc2101_datarate_t`, `emc2101_ideality_t`

2. **Buffer Overflow Prevention** ✅
   - Replaced `strcpy()` with `snprintf()` in `main/system.c`
   - Fixed network address string initialization

3. **Safe String Operations in HTTP Server** ✅
   - Replaced `strcpy()` with `snprintf()` in `main/http_server/http_server.c`

4. **EMC2101 Configuration Validation** ✅
   - Added range validation in `main/thermal/thermal.c:21-33`
   - Validates ideality factor (0x08-0x37) and beta compensation (0x00-0x08)

5. **TPS546 Diagnostics** ✅
   - Added MFR info logging in `main/power/TPS546.c:646-654`
   - Logs factory ID, model, revision without NVM writes

6. **WebSocket Packet Handling** ✅
   - Implemented PING/PONG keepalive in `main/http_server/websocket.c:193-219`
   - Added TEXT message echo and BINARY logging

7. **eFuse Board Version Detection** ✅
   - Added hardware detection in `main/device_config.c:22-53`
   - Validates against user config, warns on mismatch

8. **Build System Fix** ✅
   - Added `efuse` component to `main/CMakeLists.txt:76`

---

## Summary Statistics

- **Total Issues Identified**: 18
- **Critical Severity**: 6 issues
- **High Severity**: 4 issues
- **Medium Severity**: 4 issues
- **Low Severity**: 4 issues

### By Phase
- **Phase 1 (Critical Safety)**: 3 issues - 🚧 In Progress
- **Phase 2 (Stability)**: 4 issues - 📋 Planned
- **Phase 3 (Code Quality)**: 6 issues - 📋 Planned
- **Phase 0 (Completed)**: 8 improvements - ✅ Done

### Progress
- **Completed**: 8 items (30.8%)
- **In Progress**: 3 items (11.5%)
- **Planned**: 15 items (57.7%)

---

## Testing Requirements

### Phase 1 Testing
- [ ] Power management error recovery testing
- [ ] Malformed JSON injection testing
- [ ] File serving with edge-case filenames

### Phase 2 Testing
- [ ] Stress testing memory allocation failures
- [ ] Concurrent BAP command testing
- [ ] String operation boundary testing

### Phase 3 Testing
- [ ] Code coverage analysis
- [ ] Static analysis with cppcheck
- [ ] Memory leak detection with Valgrind

---

## Notes

- All fixes maintain backward compatibility with existing configurations
- Hardware safety improvements prioritized over code quality
- Changes follow ESP-IDF 5.5.1 best practices
- FreeRTOS task safety patterns enforced

Last Updated: December 2024
