export interface DtoDashboardSummary{
    totalSales:number,
    orderCount:number,
    productCount:number,
    topSellingProducts:DtoProduct[];
}

 export interface DtoProduct{
    name:string,
    description:string,
    price:string,
    stock:number,
    totalSalesCount:number,
    categories:string[],
    images:{imageUrl:string}[];


}