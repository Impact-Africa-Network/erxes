export const CONTRACT_STATUS = {
  DRAFT: 'draft',
  NORMAL: 'normal',
  BAD: 'bad',
  CLOSED: 'closed',
  ALL: ['draft', 'normal', 'bad', 'closed']
};

export const STORED_INTEREST_TYPES = {
  STORED_INTEREST: 'storedInterest',
  OUT_BALANCE: 'outBalance'
};

export const STORE_INTEREST_INTERVAL = {
  DAILY: 'daily',
  MONTLY: 'montly',
  END_OF_MONTH: 'endOfMonth',
  END_OF_CONTRACT: 'endOfContract'
};

export const INTEREST_GIVE_INTERVAL = {
  END_OF_MONTH: 'endOfMonth',
  END_OF_CONTRACT: 'endOfContract'
};

export const TRANSACTION_TYPE = {
  INCOME: 'income',
  OUTCOME: 'outcome',
  INTERESTRETURN: 'interestReturn',
  INTERESTCHANGE: 'interestChange'
};

export const CLOSE_OR_EXTEND = {
  CLOSE_END_OF_CONTRACT: 'closeEndOfContract',
  AUTO_EXTEND: 'autoExtend'
};

export const INTEREST_RESULT_TYPE = {
  CURRENT_ACCOUNT: 'currentAccount',
  DEPOSIT_ACCOUNT: 'depositAccount'
};

export const BLOCK_TYPE = {
  LOAN_PAYMENT: 'loanPayment',
  SCHEDULE_TRANSACTION: 'scheduleTransaction'
};

export const BLOCK_STATUS = {
  PENDING: 'pending',
  DONE: 'done'
};
