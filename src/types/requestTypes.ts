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
    categories:DtoCategory[],
    images:{imageUrl:string}[];
    createdAt:string,
    id:string,
    updatedAt:string,
    totalEarning:string




}
export interface DtoCategory{
   name:string

}