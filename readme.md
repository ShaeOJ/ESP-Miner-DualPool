```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║    ██████╗ ██╗   ██╗ █████╗ ██╗         ██████╗  ██████╗  ██████╗ ██╗        ║
║    ██╔══██╗██║   ██║██╔══██╗██║         ██╔══██╗██╔═══██╗██╔═══██╗██║        ║
║    ██║  ██║██║   ██║███████║██║         ██████╔╝██║   ██║██║   ██║██║        ║
║    ██║  ██║██║   ██║██╔══██║██║         ██╔═══╝ ██║   ██║██║   ██║██║        ║
║    ██████╔╝╚██████╔╝██║  ██║███████╗    ██║     ╚██████╔╝╚██████╔╝███████╗   ║
║    ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝    ╚═╝      ╚═════╝  ╚═════╝ ╚══════╝   ║
║                                                                              ║
║              ESP-MINER DUAL POOL EDITION v2.12.0-DualPool-2                  ║
║                                                                              ║
║                    [ VAULT-TEC APPROVED FIRMWARE ]                           ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ PIP-BOY 3000 MARK IV              BITAXE MINING TERMINAL              [////] │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  STATUS: OPERATIONAL                    RADIATION: NOMINAL                   │
│  HASH RATE: ████████████░░ 78%          CAPS EARNED: CALCULATING...          │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

## VAULT-TEC NOTICE

> *"Prepare for the future of decentralized mining!"*

This is a **modified fork** of the official ESP-Miner firmware, enhanced with **Dual Pool Mining** capabilities. Split your hashrate between two pools simultaneously - because in the wasteland, diversification is survival.

---

## SPECIAL FEATURES

```
╔═══════════════════════════════════════════════════════════════╗
║  [*] DUAL POOL MINING                                         ║
║      > Mine to TWO pools simultaneously                       ║
║      > Configurable hashrate split (1-99%)                    ║
║      > Independent connection management                      ║
║                                                               ║
║  [*] ENHANCED MONITORING                                      ║
║      > Per-pool share statistics                              ║
║      > Dual block header display                              ║
║      > Real-time pool status indicators                       ║
║                                                               ║
║  [*] OLED DISPLAY SUPPORT                                     ║
║      > Alternating pool info display                          ║
║      > Primary/Secondary pool cycling                         ║
║      > ScriptSig display for both pools                       ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## QUICK START GUIDE

### Installation

```
┌─────────────────────────────────────────────────────────────┐
│ STEP 1: Download the latest release                         │
│ STEP 2: Flash esp-miner.bin to your Bitaxe                  │
│ STEP 3: Flash www.bin for the web interface                 │
│ STEP 4: Configure your pools in AxeOS                       │
│ STEP 5: Enable Dual Pool Mode                               │
│ STEP 6: Set your hashrate balance                           │
│ STEP 7: Start mining to the future!                         │
└─────────────────────────────────────────────────────────────┘
```

### Flashing with Bitaxetool

```bash
pip install --upgrade bitaxetool

# Flash firmware
bitaxetool --firmware ./esp-miner-factory-xxx-v2.12.0-DualPool-2.bin
```

---

## DUAL POOL CONFIGURATION

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                         POOL CONFIGURATION                                   │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PRIMARY POOL (Pool 1)                                                       │
│  ├─ URL: stratum+tcp://pool1.example.com:3333                                │
│  ├─ User: your_wallet.worker1                                                │
│  └─ Status: [CONNECTED]                                                      │
│                                                                              │
│  SECONDARY POOL (Pool 2)                                                     │
│  ├─ URL: stratum+tcp://pool2.example.com:3333                                │
│  ├─ User: your_wallet.worker2                                                │
│  └─ Status: [CONNECTED]                                                      │
│                                                                              │
│  MODE: [■] Dual Pool    [ ] Failover                                         │
│                                                                              │
│  HASHRATE BALANCE                                                            │
│  Primary ████████████████████░░░░░░░░░░ 70%                                  │
│  Secondary ██████████░░░░░░░░░░░░░░░░░░ 30%                                  │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Pool Modes

| Mode | Description |
|------|-------------|
| **Failover** | Secondary pool used only when primary fails |
| **Dual Pool** | Both pools receive work simultaneously based on balance |

### Balance Settings

- Set percentage from **1-99%** for primary pool
- Secondary pool receives the remainder
- Example: 70% primary = 30% secondary

---

## WEB INTERFACE (AxeOS)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  AxeOS DUAL POOL DASHBOARD                                                   │
├────────────────────┬────────────────────┬────────────────────────────────────┤
│  HASHRATE          │  SHARES            │  BLOCK HEADERS                     │
│  ───────────       │  ──────            │  ─────────────                     │
│  Total: 520 GH/s   │  Primary:          │  ● Primary Pool                    │
│                    │    Accepted: 1,250 │    Height: 926496                  │
│  Primary (70%):    │    Rejected: 5     │    Diff: 149.30 T                  │
│    364 GH/s        │                    │    Tag: FirePool                   │
│                    │  Secondary:        │                                    │
│  Secondary (30%):  │    Accepted: 520   │  ● Secondary Pool                  │
│    156 GH/s        │    Rejected: 2     │    Height: 926496                  │
│                    │                    │    Diff: 148.95 T                  │
│                    │                    │    Tag: Ocean                      │
└────────────────────┴────────────────────┴────────────────────────────────────┘
```

---

## API ENDPOINTS

### System Info (includes dual pool data)

```bash
curl http://YOUR-BITAXE-IP/api/system/info
```

**New fields in response:**
```json
{
  "poolMode": 1,
  "poolBalance": 70,
  "primaryPoolConnected": true,
  "secondaryPoolConnected": true,
  "poolDifficultySecondary": 1024,
  "responseTimeSecondary": 45.2,
  "blockHeightSecondary": 926496,
  "scriptsigSecondary": "Ocean.xyz",
  "networkDifficultySecondary": 148950000000000,
  "dualPoolStats": {
    "primaryAccepted": 1250,
    "primaryRejected": 5,
    "secondaryAccepted": 520,
    "secondaryRejected": 2
  }
}
```

### Configure Dual Pool Mode

```bash
curl -X PATCH http://YOUR-BITAXE-IP/api/system \
     -H "Content-Type: application/json" \
     -d '{
       "poolMode": 1,
       "poolBalance": 70,
       "fallbackStratumURL": "pool2.example.com",
       "fallbackStratumPort": 3333,
       "fallbackStratumUser": "wallet.worker2"
     }'
```

---

## OLED DISPLAY

In Dual Pool Mode, the mining screen alternates between pools:

```
┌────────────────────┐      ┌────────────────────┐
│ Primary Pool       │      │ Secondary Pool     │
│ Block: 926496      │  =>  │ Block: 926496      │
│ Diff: 149.30T      │      │ Diff: 148.95T      │
│ FirePool           │      │ Ocean.xyz          │
└────────────────────┘      └────────────────────┘
```

---

## BUILDING FROM SOURCE

### Prerequisites

```
┌─────────────────────────────────────────────────────────────┐
│ REQUIRED COMPONENTS:                                        │
│ [■] ESP-IDF v5.5                                            │
│ [■] Node.js / npm                                           │
│ [■] Python 3.4+                                             │
└─────────────────────────────────────────────────────────────┘
```

### Build Commands

```bash
# Build Angular frontend
cd main/http_server/axe-os
npm install
npm run build

# Build ESP firmware (in ESP-IDF environment)
cd /path/to/ESP-Miner
idf.py build

# Create merged binary
./merge_bin.sh ./esp-miner-merged.bin
```

---

## TROUBLESHOOTING

```
╔═══════════════════════════════════════════════════════════════╗
║  VAULT-TEC DIAGNOSTIC TERMINAL                                ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  ERROR: Secondary pool not connecting                         ║
║  > Check fallback pool URL and port                           ║
║  > Verify network connectivity                                ║
║  > Ensure pool supports stratum v1                            ║
║                                                               ║
║  ERROR: Version mismatch warning                              ║
║  > Flash both esp-miner.bin AND www.bin                       ║
║  > Versions must match exactly                                ║
║                                                               ║
║  ERROR: Hashrate not splitting correctly                      ║
║  > Check poolBalance setting (1-99)                           ║
║  > Verify both pools are connected                            ║
║  > Allow 1-2 minutes for balance to stabilize                 ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## CREDITS

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  Original ESP-Miner by Bitaxe Organization                                   │
│  https://github.com/bitaxeorg/esp-miner                                      │
│                                                                              │
│  Dual Pool Modifications by ShaeOJ                                           │
│  https://github.com/ShaeOJ/ESP-Miner-DualPool                                │
│                                                                              │
│  "War never changes, but mining does."                                       │
│                                    - Vault-Tec Mining Division               │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## LICENSE

This project inherits the license from the original ESP-Miner project.

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║                    VAULT-TEC INDUSTRIES                                      ║
║           "Preparing for the Future of Mining"                               ║
║                                                                              ║
║                         Est. 2077                                            ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```
