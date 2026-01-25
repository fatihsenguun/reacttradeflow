export interface DtoDashboardSummary{
    totalSales:number,
    orderCount:number,
    productCount:number,
    topSellingProducts:DtoProduct[];
    lastOrders:object[]
}

 export interface DtoProduct{
    name:string,
    description:string,
    price:number,
    stock:number,
    totalSalesCount:number,
    categories:string[],
    images:{imageUrl:string}[];
    createdAt:string,
    id:string,
    updatedAt:string,
    totalEarning:string




}