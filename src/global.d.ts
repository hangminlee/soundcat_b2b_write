import type TomSelectType from "tom-select";

declare global {
  const TomSelect: typeof TomSelectType;
  interface Window {
    getDefaultAddr?: () => 배송정보타입;
    getOrderType?: () => string;
    getExistingData?: () => 품목리스트항목타입[];
    checkEnforced?: () => boolean;
    setData?: (품목리스트항목타입: 품목리스트항목타입) => void;
    validateData?: (검사결과: number) => Promise<void>;
  }
}

export {};
