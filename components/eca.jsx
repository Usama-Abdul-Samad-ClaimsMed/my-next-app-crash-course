import React from "react";

const eca = () => {
  //////

  // removeDuplicateClaims
  //  // for (const claim of claims) {
  //   if (!claimNos.includes(claim.claim_no)) {
  //     claimNos.push(claim.claim_no)
  //   } else {
  //     if (claim.claim_no && claim.type !== 'Recoupment' && !duplicateClaimNumbers.includes(claim.claim_no)) {
  //       duplicateClaimNumbers.push(claim.claim_no)
  //     }
  //   }
  // }
  /////

  //  //// Create an object to track the last claim for each claim number
  //  const lastClaimByClaimNo = {}

  //  updateRows.forEach((currentClaim, i) => {
  //    const claimNo = currentClaim.claim_no

  //    // Check if we have seen this claim number before
  //    if (lastClaimByClaimNo.hasOwnProperty(claimNo)) {
  //      // If yes, update initial_balance_amount and balance_amount based on the last claim
  //      currentClaim.initial_balance_amount = parseFloat(
  //        Number(lastClaimByClaimNo[claimNo].balance_amount).toFixed(2)
  //      )
  //      currentClaim.balance_amount = parseFloat(
  //        Number(
  //          Number(currentClaim.initial_balance_amount) -
  //            Number(currentClaim.paid_amount + currentClaim.adjustment_amount)
  //        ).toFixed(2)
  //      )
  //    }

  //    // Update the last claim for this claim number with the current claim
  //    lastClaimByClaimNo[claimNo] = currentClaim

  //    if (currentClaim.billed_amount <= 0 && currentClaim.type === 'Primary') {
  //      currentClaim.allowed_amount = 0
  //      currentClaim.paid_amount = 0
  //    }

  //    if (currentClaim.type === 'Recoupment') {
  //      currentClaim.allowed_amount = 0
  //    }
  //  })

  // if (paidAmountArray) {
  //     const reducing = paidAmountArray.reduce((accumulator, value) => {
  //       if (value) {
  //         return accumulator + Number(value)
  //       }
  //       return accumulator
  //     }, 0)
  //     setSumOfPaidAmount(reducing)
  //   }
  return <div>eca</div>;
};

export default eca;
