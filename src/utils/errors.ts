/**
 * Enhanced Web3 & Ethers Error Parser for Riot Mining Platform
 * Provides detailed, user-friendly explanations with exact reasons and actionable suggestions.
 */

export interface ParsedError {
    title: string;
    reason: string;
    suggestion?: string;
    type: 'error' | 'warning' | 'info';
    fullText: string;
}

export function parseDetailedError(err: any, context?: 'stake' | 'withdraw' | 'approve' | 'general'): ParsedError {
    if (!err) {
        return {
            title: 'Unknown Error',
            reason: 'An unknown error occurred.',
            suggestion: 'Please try again.',
            type: 'error',
            fullText: 'Unknown error occurred.'
        };
    }

    console.error(`[Web3 Transaction Error ${context ? `(${context})` : ''}]:`, err);

    const errMsg = (err.message || '').toLowerCase();
    const errReason = (err.reason || '').toLowerCase();
    const errShort = (err.shortMessage || '').toLowerCase();
    const allText = `${errMsg} ${errReason} ${errShort} ${JSON.stringify(err.info || {})} ${JSON.stringify(err.data || {})}`.toLowerCase();

    // 1. User rejection / cancellation in wallet
    if (
        err.code === 4001 ||
        err.code === 'ACTION_REJECTED' ||
        allText.includes('user rejected') ||
        allText.includes('rejected by user') ||
        allText.includes('user disapproved') ||
        allText.includes('rejected the request') ||
        allText.includes('user declined') ||
        allText.includes('user denied') ||
        allText.includes('transaction was rejected') ||
        allText.includes('cancelled by user') ||
        allText.includes('request rejected')
    ) {
        const actionName = context === 'stake' ? 'Staking' : context === 'withdraw' ? 'Withdrawal' : context === 'approve' ? 'USDT Approval' : 'Transaction';
        return {
            title: '🚫 Transaction Rejected in Wallet',
            reason: `${actionName} request aapke wallet (Trust Wallet/MetaMask) me reject ya cancel kar di gayi.`,
            suggestion: 'Ise complete karne ke liye wallet app open karein aur "Confirm / Approve" button par tap karein.',
            type: 'warning',
            fullText: `${actionName} was rejected in your wallet. Please approve the request in your wallet app to continue.`
        };
    }

    // 2. Insufficient BNB for Gas fees
    if (
        err.code === 'INSUFFICIENT_FUNDS' ||
        allText.includes('insufficient funds for gas') ||
        allText.includes('insufficient funds') ||
        allText.includes('exceeds the balance') ||
        allText.includes('gas * price + value')
    ) {
        return {
            title: '⛽ Insufficient BNB for Gas Fees',
            reason: 'BSC blockchain par transaction execute karne ke liye aapke wallet me BNB balance kam hai.',
            suggestion: 'Aapke wallet me kam se kam 0.0015 - 0.002 BNB (~$0.60-$1.00) hona zaroori hai network fees ke liye.',
            type: 'error',
            fullText: 'Insufficient BNB balance for network/gas fees. Please deposit at least 0.002 BNB in your wallet and retry.'
        };
    }

    // 3. Specific Smart Contract Revert Reasons
    if (allText.includes('contract has insufficient funds')) {
        return {
            title: '🏦 Contract Balance Low',
            reason: 'Smart contract ke paas USDT balance abhi payout ke liye kam hai.',
            suggestion: 'Contract me liquidity add hone ke baad withdrawal ho sakega. Kripya admin se contact karein.',
            type: 'error',
            fullText: 'Contract has insufficient USDT funds to process this withdrawal. Please contact platform support.'
        };
    }

    if (allText.includes('cycle not finished')) {
        return {
            title: '⏳ Staking Cycle Incomplete',
            reason: '37 din ka staking cycle abhi complete nahi hua hai.',
            suggestion: 'Withdrawal 37 din poore hone par hi unlock hota hai. Tab tak rewards daily accumulate ho rahe hain.',
            type: 'warning',
            fullText: 'Staking cycle not finished. Principal and rewards can only be withdrawn after the 37-day cycle completes.'
        };
    }

    if (allText.includes('already withdrawn')) {
        return {
            title: '✅ Already Withdrawn',
            reason: 'Yeh stake pehle hi withdraw kiya ja chuka hai.',
            suggestion: 'Aapne yeh funds pehle withdraw kar liye hain. Wallet transaction history check karein.',
            type: 'info',
            fullText: 'This stake has already been withdrawn.'
        };
    }

    if (allText.includes('amount below minimum') || allText.includes('min_stake')) {
        return {
            title: '⚠️ Minimum 50 USDT Required',
            reason: 'Mining node activate karne ke liye minimum 50 USDT stake karna zaroori hai.',
            suggestion: 'Amount ko kam se kam 50 USDT rakhein aur dobara try karein.',
            type: 'warning',
            fullText: 'Minimum 50 USDT is required to activate mining node.'
        };
    }

    if (allText.includes('insufficient usdt allowance') || allText.includes('approve first')) {
        return {
            title: '🔐 USDT Approval Required',
            reason: 'USDT transfer karne se pehle wallet me spending approval hona zaroori hai.',
            suggestion: 'Pehle wallet me USDT Approve transaction ko confirm karein, fir stake karein.',
            type: 'warning',
            fullText: 'USDT allowance not approved. Please approve USDT spending limit first.'
        };
    }

    if (allText.includes('insufficient wallet balance to stake') || (context === 'stake' && allText.includes('insufficient balance'))) {
        return {
            title: '💰 Insufficient USDT Balance',
            reason: 'Aapke wallet me stake amount ke barabar USDT balance nahi hai.',
            suggestion: 'Wallet me required USDT deposit karein aur dobara try karein.',
            type: 'error',
            fullText: 'Insufficient USDT balance in your wallet to complete staking.'
        };
    }

    if (allText.includes('usdt transfer to contract failed') || allText.includes('transfer failed')) {
        return {
            title: '❌ USDT Transfer Failed',
            reason: 'Wallet se smart contract me USDT transfer nahi ho paya.',
            suggestion: 'Check karein ki aapka USDT balance aur allowance sufficient hai aur BNB gas fees available hai.',
            type: 'error',
            fullText: 'USDT transfer to contract failed. Please check your USDT balance and allowance.'
        };
    }

    if (allText.includes('approval not confirmed')) {
        return {
            title: '⏳ Approval Pending on Blockchain',
            reason: 'USDT approval transaction abhi tak BSC blockchain par confirm nahi ho saki.',
            suggestion: 'BSC network par thoda samay lag sakta hai. Kuch seconds wait karein aur fir se try karein.',
            type: 'warning',
            fullText: 'USDT approval was not confirmed in time. Please wait a moment and retry.'
        };
    }

    if (allText.includes('wallet did not respond in time') || allText.includes('timed out after') || allText.includes('timeout')) {
        return {
            title: '⏱️ Wallet App Timeout',
            reason: 'Wallet app (Trust Wallet/MetaMask) ne time par transaction approve karne ka response nahi diya.',
            suggestion: 'Wallet app ko manually open karein, pending approvals check karein ya wallet dubara connect karein.',
            type: 'warning',
            fullText: 'Wallet did not respond in time. Please open your wallet app manually and confirm pending transactions.'
        };
    }

    if (allText.includes('no wallet connected') || allText.includes('wallet connection lost') || allText.includes('wallet connection not ready')) {
        return {
            title: '🔌 Wallet Disconnected',
            reason: 'Wallet ka connection cut gaya hai ya session expire ho chuka hai.',
            suggestion: 'Kripya "Connect Wallet" par tap karke wallet dobara connect karein.',
            type: 'warning',
            fullText: 'Wallet connection lost. Please reconnect your wallet and try again.'
        };
    }

    // 4. Extract nested revert string if available
    const nestedError = err.error || err.info?.error || err.data;
    let specificReason = err.reason || err.shortMessage || nestedError?.message || nestedError?.reason || '';
    if (specificReason && typeof specificReason === 'string') {
        const lower = specificReason.toLowerCase();
        if (!lower.includes('could not coalesce') && !lower.includes('coalesce_error') && !lower.includes('unknown error')) {
            let clean = specificReason;
            if (clean.includes('execution reverted:')) {
                clean = clean.split('execution reverted:')[1].trim();
            }
            if (clean && clean.length > 2 && clean.length < 150) {
                return {
                    title: '⚠️ Transaction Reverted',
                    reason: clean,
                    suggestion: 'Please verify your balances and cycle status before retrying.',
                    type: 'error',
                    fullText: clean
                };
            }
        }
    }

    // 5. Fallback for generic execution reverted
    if (allText.includes('execution reverted') || allText.includes('gas required exceeds allowance') || allText.includes('always failing transaction')) {
        return {
            title: '❌ Execution Reverted',
            reason: context === 'withdraw'
                ? 'Withdrawal execute nahi ho saki. Reason: 37-day cycle poora nahi hua hai, ya contract me USDT funds kam hain, ya balance maintain nahi raha.'
                : 'Staking execute nahi ho saki. Reason: Wallet me 50+ USDT balance, BNB gas fees, ya approval check karein.',
            suggestion: context === 'withdraw'
                ? 'Check karein ki aapka 37-day cycle complete hai aur contract funded hai.'
                : 'Ensure aapke paas 50+ USDT aur at least 0.002 BNB gas fees available hai.',
            type: 'error',
            fullText: context === 'withdraw'
                ? 'Withdrawal transaction reverted. Verify 37-day cycle completion and contract liquidity.'
                : 'Transaction failed. Ensure you have 50+ USDT, sufficient BNB for gas, and approved USDT spending.'
        };
    }

    return {
        title: 'Transaction Error',
        reason: err.message || 'Transaction could not be processed.',
        suggestion: 'Please verify your wallet connection and try again.',
        type: 'error',
        fullText: err.message || 'Transaction failed. Please try again.'
    };
}

/**
 * Backward-compatible helper returning a user-friendly string
 */
export function parseEthersError(err: any, context?: 'stake' | 'withdraw' | 'approve' | 'general'): string {
    const detailed = parseDetailedError(err, context);
    if (detailed.suggestion) {
        return `${detailed.reason}\n👉 ${detailed.suggestion}`;
    }
    return detailed.reason || detailed.fullText;
}
