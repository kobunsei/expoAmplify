import dayjs from 'dayjs';
const now = dayjs();

export const reports = [
  {
    workingDate: '2024-05-13',
    reportStatus: '精査済み',
    modificationReason: '',
    commerces: [
      {
        workingDate: '2024-05-13',
        commerceCode: 1001,
        commerceName: '現金売上',
        commerceValueOfReport: 1000,
        commerceValueOfModification: 2000,
      },
      {
        workingDate: '2024-05-13',
        commerceCode: 1002,
        commerceName: 'ギフト券売上',
        commerceValueOfReport: 3000,
        commerceValueOfModification: 3000,
      },
      {
        workingDate: '2024-05-13',
        commerceCode: 1003,
        commerceName: '商品券売上',
        commerceValueOfReport: 5000,
        commerceValueOfModification: 5000,
      },
      {
        workingDate: '2024-05-13',
        commerceCode: 1004,
        commerceName: 'クレジット売上',
        commerceValueOfReport: 30000,
        commerceValueOfModification: 30000,
      },
      {
        workingDate: '2024-05-13',
        commerceCode: 3001,
        commerceName: '現金在高',
        commerceValueOfReport: 8000,
        commerceValueOfModification: 8000,
      },
      {
        workingDate: '2024-05-13',
        commerceCode: 13001,
        commerceName: '客数',
        commerceValueOfReport: 8,
        commerceValueOfModification: 8,
      },
    ],
  },
  {
    workingDate: '2024-05-14',
    reportStatus: '精査済み',
    modificationReason: '現金売上高は入金機と異なるため',
    commerces: [
      {
        workingDate: '2024-05-14',
        commerceCode: 1001,
        commerceName: '現金売上',
        commerceValueOfReport: 1000,
        commerceValueOfModification: 2000,
      },
      {
        workingDate: '2024-05-14',
        commerceCode: 1002,
        commerceName: 'ギフト券売上',
        commerceValueOfReport: 3000,
        commerceValueOfModification: 3000,
      },
      {
        workingDate: '2024-05-14',
        commerceCode: 1003,
        commerceName: '商品券売上',
        commerceValueOfReport: 5000,
        commerceValueOfModification: 5000,
      },
      {
        workingDate: '2024-05-14',
        commerceCode: 1004,
        commerceName: 'クレジット売上',
        commerceValueOfReport: 30000,
        commerceValueOfModification: 30000,
      },
      {
        workingDate: '2024-05-14',
        commerceCode: 3001,
        commerceName: '現金在高',
        commerceValueOfReport: 8000,
        commerceValueOfModification: 8000,
      },
      {
        workingDate: '2024-05-14',
        commerceCode: 13001,
        commerceName: '客数',
        commerceValueOfReport: 8,
        commerceValueOfModification: 8,
      },
    ],
  },
  {
    workingDate: '2024-05-15',
    reportStatus: '報告済み',
    modificationReason: '',
    commerces: [
      {
        workingDate: '2024-05-15',
        commerceCode: 1001,
        commerceName: '現金売上',
        commerceValueOfReport: 1000,
        commerceValueOfModification: 2000,
      },
      {
        workingDate: '2024-05-15',
        commerceCode: 1002,
        commerceName: 'ギフト券売上',
        commerceValueOfReport: 3000,
        commerceValueOfModification: 3000,
      },
      {
        workingDate: '2024-05-15',
        commerceCode: 1003,
        commerceName: '商品券売上',
        commerceValueOfReport: 5000,
        commerceValueOfModification: 5000,
      },
      {
        workingDate: '2024-05-15',
        commerceCode: 1004,
        commerceName: 'クレジット売上',
        commerceValueOfReport: 30000,
        commerceValueOfModification: 30000,
      },
      {
        workingDate: '2024-05-15',
        commerceCode: 3001,
        commerceName: '現金在高',
        commerceValueOfReport: 8000,
        commerceValueOfModification: 8000,
      },
      {
        workingDate: '2024-05-15',
        commerceCode: 13001,
        commerceName: '客数',
        commerceValueOfReport: 8,
        commerceValueOfModification: 8,
      },
    ],
  },
];

export const notifications = [
  {
    time: now.subtract(1, 'hour').toISOString(),
    title: '停電のお知らせ',
    body: '2024/5/20(月)の21時から22時の間に、設備点検のため電停となります。',
  },
  {
    time: now.subtract(1, 'days').toISOString(),
    title: 'エレベーター利用不可のお知らせ',
    body: '2024/5/28(火)の21時から22時の間に、設備点検のためエレベーターが利用不可となります。',
  },
  {
    time: now.subtract(2, 'days').toISOString(),
    title: '停電のお知らせ',
    body: '2024/5/27(月)の21時から22時の間に、設備点検のため電停となります。',
  },
  {
    time: now.subtract(4, 'days').toISOString(),
    title: 'エレベーター利用不可のお知らせ',
    body: '2024/5/30(木)の21時から22時の間に、設備点検のためエレベーターが利用不可となります。',
  },
  {
    time: now.subtract(5, 'days').toISOString(),
    title: '停電のお知らせ',
    body: '2024/6/3(月)の21時から22時の間に、設備点検のため電停となります。',
  },
];