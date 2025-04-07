# Code Explanation: SMPP Connection Sorting & Fallback Setup

## What This Code Does

### 1. Sorting SMPP Connections
```javascript
const ranges = smppConnections.sort((a,b) => b.priority - a.priority);
```
**Sorts** the smppConnections array by priority (highest first)


### 2. **The return statement returns an object with three properties** 
   ```javascript
   return {
   smppConnections: ranges,
   passToNextSmtpIfFail: true,
   sendViaWhatsappIfFail: true
   }
   ```



| Property                 | Value      | Meaning |
|--------------------------|------------|-------------|
| **`smppConnections`**    | `[Sorted array]` | Uses connections in priority order |
| **`passToNextSmtpIfFail`** | `true`    | Will try next email server if SMPP fails |
| **`sendViaWhatsappIfFail`** | `true`    | Will fallback to **WhatsApp** if all else fails|



### Intended Behavior Flow:
1. Try sending through SMPP connections in **priority order**
2. First fallback: Try SMTP servers
3. Final fallback: Send via WhatsApp 
