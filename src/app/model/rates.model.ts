export interface Rates {
    rates?: (RatesEntity)[] | null;
  }
  export interface RatesEntity {
    svcprovcd: string;
    ccyname: string;
    rate: number;
    toccy: string;
    sellrate: number;
    buyrate: number;
    frmccy: string;
  }
  