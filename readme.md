<p align="center">
  <img src="https://img.shields.io/badge/VAULT--TEC-APPROVED-yellow?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRDcwMCIgZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4eiIvPjwvc3ZnPg==" alt="Vault-Tec Approved"/>
</p>

<h1 align="center">

```
╔═══════════════════════════════════════════════════════════════════════════╗
║  ██╗   ██╗ █████╗ ██╗   ██╗██╗  ████████╗   ████████╗███████╗ ██████╗     ║
║  ██║   ██║██╔══██╗██║   ██║██║  ╚══██╔══╝   ╚══██╔══╝██╔════╝██╔════╝     ║
║  ██║   ██║███████║██║   ██║██║     ██║         ██║   █████╗  ██║          ║
║  ╚██╗ ██╔╝██╔══██║██║   ██║██║     ██║         ██║   ██╔══╝  ██║          ║
║   ╚████╔╝ ██║  ██║╚██████╔╝███████╗██║         ██║   ███████╗╚██████╗     ║
║    ╚═══╝  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝         ╚═╝   ╚══════╝ ╚═════╝     ║
║═══════════════════════════════════════════════════════════════════════════║
║              ESP-MINER DUAL POOL EDITION :: VAULT 111                     ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

</h1>

<p align="center">
  <img src="https://img.shields.io/badge/VERSION-ESP--Miner--Dual--Ba--V1-00ff00?style=for-the-badge&labelColor=1a1a1a" alt="Version"/>
  <img src="https://img.shields.io/badge/STATUS-OPERATIONAL-00ff00?style=for-the-badge&labelColor=1a1a1a" alt="Status"/>
  <img src="https://img.shields.io/badge/RADIATION-SAFE-yellow?style=for-the-badge&labelColor=1a1a1a" alt="Radiation"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/ESP32--S3-POWERED-blue?style=flat-square&logo=espressif&logoColor=white" alt="ESP32"/>
  <img src="https://img.shields.io/badge/DUAL%20POOL-ENABLED-green?style=flat-square" alt="Dual Pool"/>
  <img src="https://img.shields.io/badge/BITCOIN-MINING-orange?style=flat-square&logo=bitcoin&logoColor=white" alt="Bitcoin"/>
</p>

---

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  VAULT-TEC AUTOMATED MINING SYSTEM                                          │
│  "Preparing for the future, one hash at a time"                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## :radioactive: TERMINAL ACCESS GRANTED

> **ATTENTION VAULT DWELLER:** This is the **ESP-Miner Dual Pool Edition** - an advanced open-source ESP32 firmware designed for [Bitaxe](https://github.com/bitaxeorg/bitaxe) mining hardware. Featuring redundant pool connectivity for maximum uptime in post-apocalyptic conditions.

---

## :gear: SUPPORTED VAULT HARDWARE

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  DEVICE FAMILY         │  BOARD VERSIONS  │  ASIC      │  CORES  │  MAX PWR  ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Bitaxe Max            │  102, 2.2        │  BM1397    │    1    │   25W     ║
║  Bitaxe Ultra          │  201-207         │  BM1366    │    1    │   25W     ║
║  Bitaxe Hex            │  302-303         │  BM1366    │    6    │   90W     ║
║  Bitaxe Supra          │  400-403         │  BM1368    │    1    │   40W     ║
║  Bitaxe Gamma          │  600-602         │  BM1370    │    1    │   40W     ║
║  Bitaxe SupraHex       │  701-702         │  BM1368    │    6    │  120W     ║
║  Bitaxe GammaTurbo     │  800             │  BM1370    │    2    │   60W     ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### :wrench: TCH Bitaxe Supra Hex (Board 701) - FULLY SUPPORTED

| Component | Specification |
|-----------|---------------|
| **ASIC** | BM1368 x6 |
| **Max Power** | 120W |
| **Thermal** | EMC2302 + TMP1075 |
| **Power** | TPS546 Controller |
| **Voltage Domains** | 3 |

---

## :zap: DUAL POOL TECHNOLOGY

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     REDUNDANT MINING SYSTEM v1.0                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│    ┌──────────────┐         ┌──────────────┐                               │
│    │  PRIMARY     │         │  BACKUP      │                               │
│    │    POOL      │◄───────►│    POOL      │                               │
│    │  [ACTIVE]    │         │  [STANDBY]   │                               │
│    └──────────────┘         └──────────────┘                               │
│            │                        │                                       │
│            └────────┬───────────────┘                                       │
│                     ▼                                                       │
│            ┌──────────────┐                                                 │
│            │   BITAXE     │                                                 │
│            │   MINER      │                                                 │
│            └──────────────┘                                                 │
│                                                                             │
│    MODES: [0] Failover  │  [1] Dual Pool (Load Balance)                    │
│    Balance: 1-99% configurable                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Features:**
- :shield: **Failover Mode** - Automatic switch to backup pool on primary failure
- :balance_scale: **Dual Pool Mode** - Distribute hashrate between two pools
- :chart_with_upwards_trend: **Separate Statistics** - Track shares per pool independently

---

## :floppy_disk: INSTALLATION PROTOCOL

### Pre-War Requirements

| Tool | Version | Purpose |
|------|---------|---------|
| Python | 3.4+ | Bitaxetool runtime |
| pip | latest | Package management |
| esptool | 4.9.0 | Flash programming |

### Flash Procedure

```bash
# STEP 1: Install bitaxetool from PyPI
pip install bitaxetool==0.6.1

# STEP 2: Flash factory image (replace XXX with your board version)
bitaxetool --firmware ./esp-miner-factory-XXX-ESP-Miner-Dual-Ba-V1.bin

# STEP 3: Flash configuration only
bitaxetool --config ./config-XXX.cvs

# STEP 4: Flash both firmware AND config
bitaxetool --config ./config-XXX.cvs --firmware ./esp-miner-factory-XXX-ESP-Miner-Dual-Ba-V1.bin
```

> :warning: **WARNING:** esptool v5.x.x is NOT compatible. Use v4.9.0 or earlier.

---

## :satellite: AxeOS COMMAND INTERFACE

```
╔═══════════════════════════════════════════════════════════════════╗
║  AxeOS API v1.0 - VAULT-TEC MINING CONTROL SYSTEM                 ║
╠═══════════════════════════════════════════════════════════════════╣
║  Access: http://<BITAXE-IP> or http://bitaxe (mDNS)               ║
║  Recovery: http://<BITAXE-IP>/recovery                            ║
║  Overclock: Append ?oc to settings URL                            ║
╚═══════════════════════════════════════════════════════════════════╝
```

### :inbox_tray: GET Endpoints

| Endpoint | Description |
|----------|-------------|
| `/api/system/info` | System information & status |
| `/api/system/asic` | ASIC settings & configuration |
| `/api/system/statistics` | Data logging (requires activation) |
| `/api/system/statistics/dashboard` | Dashboard statistics |
| `/api/system/wifi/scan` | Scan available networks |

### :outbox_tray: POST Endpoints

| Endpoint | Description |
|----------|-------------|
| `/api/system/restart` | Initiate system restart |
| `/api/system/identify` | Device identification |
| `/api/system/OTA` | Firmware update |
| `/api/system/OTAWWW` | AxeOS web interface update |

### :arrows_counterclockwise: PATCH Endpoints

| Endpoint | Description |
|----------|-------------|
| `/api/system` | Update system settings |

### Terminal Commands

```bash
# Query system status
curl http://YOUR-BITAXE-IP/api/system/info

# Scan for WiFi networks
curl http://YOUR-BITAXE-IP/api/system/wifi/scan

# Restart device
curl -X POST http://YOUR-BITAXE-IP/api/system/restart

# OTA firmware update
curl -X POST -H "Content-Type: application/octet-stream" \
     --data-binary "@esp-miner.bin" \
     http://YOUR-BITAXE-IP/api/system/OTA

# Update fan speed
curl -X PATCH http://YOUR-BITAXE-IP/api/system \
     -H "Content-Type: application/json" \
     -d '{"fanspeed": 100}'
```

---

## :hammer_and_wrench: DEVELOPMENT STATION

### Build Environment

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  REQUIRED TOOLS                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  ESP-IDF      │  v5.5.1       │  https://docs.espressif.com/               │
│  Node.js      │  v22.15.0+    │  https://nodejs.org/                        │
│  Python       │  3.4+         │  Build scripts                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Build Commands

```bash
# Build firmware
idf.py build && ./merge_bin.sh ./esp-miner-merged.bin

# Flash to device
bitaxetool --config ./config-XXX.cvs --firmware ./esp-miner-merged.bin
```

### Hardware Requirements

| Component | Specification |
|-----------|---------------|
| **Module** | ESP32-S3-WROOM-1 N16R8 |
| **Flash** | 16MB |
| **PSRAM** | 8MB Octal SPI |
| **CPU** | 240MHz |

> :exclamation: Only N16R8 modules are supported. Modules without PSRAM or with Quad SPI PSRAM will NOT work.

---

## :rotating_light: KNOWN ISSUES

### WiFi Router Compatibility

Some routers block mining traffic:

| Issue | Solution |
|-------|----------|
| ASUS Routers | Disable AiProtection |
| TP-Link Routers | Disable IoT protection |
| No Hash Rate | Check Stratum Host/Port settings |

---

## :scroll: VAULT-TEC LEGAL DIVISION

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║   This firmware is provided "AS-IS" by Vault-Tec Industries.                  ║
║   Not responsible for: radiation exposure, nuclear winter,                    ║
║   or failed mining operations in post-apocalyptic scenarios.                  ║
║                                                                               ║
║   Display Font: Portfolio 6x8 by VileR (int10h.org/oldschool-pc-fonts)        ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

---

<p align="center">

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│              "MINING FOR A BETTER TOMORROW... UNDERGROUND"                  │
│                                                                             │
│                         ██╗   ██╗ ██╗ ██╗ ██╗                              │
│                         ██║   ██║███║███║███║                              │
│                         ██║   ██║╚██║╚██║╚██║                              │
│                         ╚██╗ ██╔╝ ██║ ██║ ██║                              │
│                          ╚████╔╝  ██║ ██║ ██║                              │
│                           ╚═══╝   ╚═╝ ╚═╝ ╚═╝                              │
│                                                                             │
│                      VAULT 111 :: ESP-Miner-Dual-Ba-V1                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

</p>

<p align="center">
  <img src="https://img.shields.io/badge/VAULT--TEC-CERTIFIED-yellow?style=for-the-badge" alt="Vault-Tec Certified"/>
  <img src="https://img.shields.io/badge/BITAXE-COMPATIBLE-blue?style=for-the-badge" alt="Bitaxe Compatible"/>
  <img src="https://img.shields.io/badge/DUAL%20POOL-READY-green?style=for-the-badge" alt="Dual Pool Ready"/>
</p>
