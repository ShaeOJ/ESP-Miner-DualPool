```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   ██████╗██╗  ██╗ █████╗ ███╗   ██╗ ██████╗ ███████╗██╗      ██████╗  ██████╗ ║
║  ██╔════╝██║  ██║██╔══██╗████╗  ██║██╔════╝ ██╔════╝██║     ██╔═══██╗██╔════╝ ║
║  ██║     ███████║███████║██╔██╗ ██║██║  ███╗█████╗  ██║     ██║   ██║██║  ███╗║
║  ██║     ██╔══██║██╔══██║██║╚██╗██║██║   ██║██╔══╝  ██║     ██║   ██║██║   ██║║
║  ╚██████╗██║  ██║██║  ██║██║ ╚████║╚██████╔╝███████╗███████╗╚██████╔╝╚██████╔╝║
║   ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚══════╝ ╚═════╝  ╚═════╝ ║
║                                                                              ║
║                    ESP-MINER DUAL POOL EDITION                               ║
║                                                                              ║
║                    [ VAULT-TEC FIRMWARE ARCHIVES ]                           ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## [v2.12.0-DualPool-3] - 2024-12-06

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ VAULT-TEC FIRMWARE UPDATE LOG                                                │
│ Classification: HARDWARE COMPATIBILITY                                       │
│ Priority: HIGH                                                               │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Added

```
╔═══════════════════════════════════════════════════════════════╗
║  TCH-BITAXE SUPRA HEX (701/702) SUPPORT                       ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  [+] INVERTED FAN POLARITY SUPPORT                            ║
║      ├─ EMC2302 driver updated for polarity inversion         ║
║      ├─ PWM polarity register (0x2A) configuration            ║
║      ├─ Inverted percentage calculation for fan speed         ║
║      └─ Proper dual fan operation on Supra Hex boards         ║
║                                                               ║
║  [+] DEVICE CONFIGURATION                                     ║
║      ├─ invert_fan_polarity field in DeviceConfig             ║
║      ├─ NVS config key for invertfanpol setting               ║
║      ├─ Board 701/702 default: inverted polarity enabled      ║
║      └─ Custom board support via NVS override                 ║
║                                                               ║
║  [+] CONFIGURATION FILES                                      ║
║      ├─ config-701.cvs updated with invertfanpol=1            ║
║      └─ config-702.cvs updated with invertfanpol=1            ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

### Board Support

**TCH-Bitaxe Supra Hex (Board 701/702):**
| Feature | Value |
|---------|-------|
| ASIC | BM1368 x6 |
| Default Frequency | 490 MHz |
| Default Voltage | 1166 mV |
| Max Power | 120W |
| Voltage Domains | 3 |
| Fan Controller | EMC2302 (dual fan, inverted polarity) |
| Temperature Sensor | TMP1075 |
| Power Regulator | TPS546 |

### Changed

- `EMC2302_init()` now accepts `invert_polarity` parameter
- `EMC2302_set_fan_speed()` inverts percentage when polarity is inverted
- `thermal.c` passes device config polarity setting to EMC2302 init

### Files Modified

- `main/device_config.h` - Added invert_fan_polarity to DeviceConfig
- `main/device_config.c` - Load invert_fan_polarity from NVS
- `main/nvs_config.h` - Added NVS_CONFIG_INVERT_FAN_POLARITY
- `main/nvs_config.c` - Added invertfanpol NVS setting
- `main/thermal/EMC2302.h` - Updated init function signature
- `main/thermal/EMC2302.c` - Polarity inversion implementation
- `main/thermal/thermal.c` - Pass polarity to EMC2302 init
- `config-701.cvs` - Added invertfanpol=1
- `config-702.cvs` - Added invertfanpol=1

---

## [v2.12.0-DualPool-2] - 2024-12-05

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ VAULT-TEC FIRMWARE UPDATE LOG                                                │
│ Classification: OPERATIONAL ENHANCEMENT                                      │
│ Priority: HIGH                                                               │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Added

```
╔═══════════════════════════════════════════════════════════════╗
║  NEW FEATURES                                                 ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  [+] DUAL POOL BLOCK HEADER DISPLAY                           ║
║      ├─ Secondary pool block height in API                    ║
║      ├─ Secondary pool scriptsig/tag in API                   ║
║      ├─ Secondary pool network difficulty in API              ║
║      └─ Both pools visible in web interface                   ║
║                                                               ║
║  [+] ENHANCED WEB INTERFACE                                   ║
║      ├─ Block Headers card shows both pools in dual mode      ║
║      ├─ Primary pool with green indicator                     ║
║      ├─ Secondary pool with blue indicator                    ║
║      └─ Fallback to single display in failover mode           ║
║                                                               ║
║  [+] OLED SCREEN IMPROVEMENTS                                 ║
║      ├─ Mining screen alternates between pools                ║
║      ├─ Shows "Primary Pool" or "Secondary Pool" header       ║
║      ├─ Displays pool-specific block info                     ║
║      └─ Automatic cycling in carousel mode                    ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

### Changed

- Block header display now pool-aware in dual mode
- Mining screen layout updated for pool identification
- API response includes secondary pool block data

### API Changes

**New fields in `/api/system/info`:**
| Field | Type | Description |
|-------|------|-------------|
| `blockHeightSecondary` | number | Secondary pool's current block height |
| `scriptsigSecondary` | string | Secondary pool's coinbase scriptsig tag |
| `networkDifficultySecondary` | number | Secondary pool's network difficulty |

---

## [v2.12.0-DualPool] - 2024-12-04

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ VAULT-TEC FIRMWARE UPDATE LOG                                                │
│ Classification: MAJOR RELEASE                                                │
│ Priority: CRITICAL                                                           │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Added

```
╔═══════════════════════════════════════════════════════════════╗
║  DUAL POOL MINING SYSTEM - INITIAL RELEASE                    ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  [+] DUAL POOL MODE                                           ║
║      ├─ Mine to two pools simultaneously                      ║
║      ├─ Configurable hashrate split (1-99%)                   ║
║      ├─ Independent socket connections per pool               ║
║      └─ Dithering algorithm for fair work distribution        ║
║                                                               ║
║  [+] POOL MODE SELECTION                                      ║
║      ├─ Failover Mode: Secondary as backup only               ║
║      └─ Dual Pool Mode: Both pools active simultaneously      ║
║                                                               ║
║  [+] PER-POOL STATISTICS                                      ║
║      ├─ Separate accepted/rejected share counts               ║
║      ├─ Individual pool connection status                     ║
║      ├─ Per-pool response time monitoring                     ║
║      └─ Pool-specific difficulty tracking                     ║
║                                                               ║
║  [+] WEB INTERFACE ENHANCEMENTS                               ║
║      ├─ Pool mode selector (Failover/Dual)                    ║
║      ├─ Hashrate balance slider                               ║
║      ├─ Dual pool status indicators                           ║
║      ├─ Per-pool share statistics display                     ║
║      └─ Visual hashrate split bar                             ║
║                                                               ║
║  [+] SECONDARY POOL TASK                                      ║
║      ├─ Dedicated FreeRTOS task for secondary pool            ║
║      ├─ Independent stratum connection management             ║
║      ├─ Automatic reconnection handling                       ║
║      └─ Clean disconnection on mode change                    ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

### Technical Details

```
┌─────────────────────────────────────────────────────────────┐
│ IMPLEMENTATION NOTES                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Work Distribution Algorithm:                                │
│ ─────────────────────────────                               │
│ Uses Floyd-Steinberg style dithering to distribute          │
│ work between pools. Ensures fair distribution over          │
│ time without requiring fractional work units.               │
│                                                             │
│ Example (70/30 split):                                      │
│   Work 1: Primary   (error: 30)                             │
│   Work 2: Primary   (error: 60)                             │
│   Work 3: Primary   (error: 90)                             │
│   Work 4: Secondary (error: 20)                             │
│   Work 5: Primary   (error: 50)                             │
│   ... pattern continues                                     │
│                                                             │
│ Connection Management:                                      │
│ ─────────────────────                                       │
│ - Primary pool: Main stratum task                           │
│ - Secondary pool: Dedicated stratum_secondary_task          │
│ - Both maintain independent sockets and state               │
│ - Clean shutdown when switching modes                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Files Modified

```
main/
├── global_state.h              # Dual pool state variables
├── system.c                    # Pool mode initialization
├── screen.c                    # OLED dual pool display
├── tasks/
│   ├── stratum_task.c          # Secondary pool task
│   ├── stratum_task.h          # Pool mode definitions
│   └── create_jobs_task.c      # Work distribution logic
├── http_server/
│   ├── http_server.c           # API dual pool fields
│   └── axe-os/
│       └── src/
│           ├── models/ISystemInfo.ts
│           └── app/components/
│               ├── home/home.component.*
│               └── pool/pool.component.*
└── nvs_config.*                # Pool mode NVS storage
```

---

## Base Version

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  Based on ESP-Miner v2.12.0 by Bitaxe Organization                           │
│  https://github.com/bitaxeorg/esp-miner                                      │
│                                                                              │
│  All original features and functionality preserved.                          │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║  "In the event of total network collapse, dual pool mining ensures           ║
║   your hashrate continues contributing to the blockchain."                   ║
║                                                                              ║
║                              - Vault-Tec Mining Manual, Chapter 7            ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
