import React from 'react'
import { GoX, GoPackage } from 'react-icons/go';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

// Gelen veri tipini kabaca tanımlayalım (TypeScript kullanıyorsan işine yarar)
interface OrderProps {
    data: {
        id: string;
        createdAt: string;
        totalAmount: number;
        status: string;
        orderItemList: Array<{
            product: {
                name: string;
                images: Array<{ imageUrl: string }>;
            }
        }>;
    }
}

function OrderBox({ data }: OrderProps) { // { data: any } yerine tip verebilirsin veya any kalabilir
    const navigate = useNavigate();

    // Tarihi okunabilir formata çevirme
    const formattedDate = new Date(data.createdAt).toLocaleDateString('tr-TR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    // API'den gelen STATUS genellikle BÜYÜK harf olur, ona göre ayarladık
    const getStatusColor = (status: string) => {
        const normalizedStatus = status?.toUpperCase(); // Büyük harfe çevirip kontrol et
        switch (normalizedStatus) {
            case 'COMPLETED': return 'text-green-400 bg-green-400/10 border-green-400/20';
            case 'PENDING': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
            case 'CANCELLED': return 'text-red-400 bg-red-400/10 border-red-400/20';
            default: return 'text-slate-200 bg-white/5';
        }
    };

    // Siparişteki ilk ürünün adı ve resmi (Müşteri adı verisi olmadığı için bunu kullanıyoruz)
    const firstProduct = data.orderItemList?.[0]?.product;
    const firstImage = firstProduct?.images?.[0]?.imageUrl;
    const productCount = data.orderItemList?.length || 0;

    const deleteOrder = async (e: React.MouseEvent) => {
        e.stopPropagation();

        Swal.fire({
            title: `Delete Order?`,
            text: "This action cannot be undone.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: "Delete",
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
        }).then((result) => {
            if (result.isConfirmed) {
                // Silme isteği buraya gelecek
                console.log("Deleted ID:", data.id);
                Swal.fire("Deleted!", "Order has been deleted.", "success");
            }
        });
    }

    return (
        <div
            onClick={() => navigate(`/orders/${data.id}`)}
            className='grid grid-cols-6 bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer hover:bg-white/10 h-23 rounded-lg shadow-sm flex items-center justify-center gap-4 p-3 transition-all'
        >


            <div className='col-span-2 w-full h-full items-center flex'>
                <div className='grid grid-cols-3 flex items-center w-full'>
                    <div className='col-span-1 flex w-full h-15 items-center justify-center rounded-md py-2'>

                        <div className={`p-2 rounded-lg items-center flex justify-center ${!firstImage ? 'bg-indigo-500/20' : ''}`}>
                            {firstImage ? (
                                <img src={firstImage} alt="Product" className="w-10 h-10 object-cover rounded-md" />
                            ) : (
                                <GoPackage className='w-6 h-6 text-indigo-400' />
                            )}
                        </div>
                    </div>
                    <div className='ml-4 col-span-2 flex flex-col justify-center'>
                        {/* ID'yi kısalttık: #3fa85f64... */}
                        <p className='text-slate-200 font-medium truncate'>#{data.id.substring(0, 8)}...</p>
                        {/* Müşteri adı API'de yok, yerine ana ürün ismini yazdık */}
                        <p className='text-slate-400 text-sm truncate'>
                            {firstProduct ? firstProduct.name : 'Unknown Product'} 
                            {productCount > 1 && <span className='text-xs ml-1 opacity-70'>(+{productCount - 1} more)</span>}
                        </p>
                    </div>
                </div>
            </div>

            {/* 2. Kolon: Toplam Tutar (totalPrice -> totalAmount) */}
            <div className='col-span-1 w-full h-full items-center flex'>
                <span className='font-medium text-slate-200'>₺{data.totalAmount}</span>
            </div>

            {/* 3. Kolon: Tarih (orderDate -> createdAt) */}
            <div className='col-span-1 w-full h-full items-center flex'>
                <span className='text-slate-400 text-sm'>{formattedDate}</span>
            </div>

            {/* 4. Kolon: Durum ve Silme Butonu */}
            <div className='col-span-2 items-center flex w-full h-full justify-between'>
                <div className={`px-3 py-1 rounded-full border text-xs font-medium ${getStatusColor(data.status)}`}>
                    {data.status}
                </div>
                <div>
                    <button
                        onClick={deleteOrder}
                        className='p-2 rounded-full transform transition-transform duration-200 ease-in-out cursor-pointer hover:scale-110 hover:bg-white/10 text-slate-400 hover:text-red-400'
                    >
                        <GoX className='w-6 h-6' />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default OrderBox