/* 列挙型定義 */
// レポートステータス
export type ReportStatus = '報告済み' | '精査済み';

/* データ型定義 */
// 取引データ
export type Report = {
  // 営業日付
  workingDate: string;
  // レポートステータス
  reportStatus: string;
  // 訂正理由
  modificationReason?: string;
};

// 取引データ
export type Commerce = {
  // 営業日付
  workingDate: string;
  // 取引コード
  commerceCode: number;
  // 取引名称
  commerceName: string;
  // 取引値（日報）
  commerceValueOfReport: number;
  // 取引値（訂正）
  commerceValueOfModification: number;
};

// ユーザデータ
export type Auth = {
  // // メール
  // email: string;
  // // 名前
  // name: string;
  // ユーザーID
  userId: string;
  // トークン
  // token: string;
};

// 通知
export type NotificationMessage = {
  // 通知時刻
  time: string;
  // 通知タイトル
  title?: string;
  // 通知本文
  body: string;
};
