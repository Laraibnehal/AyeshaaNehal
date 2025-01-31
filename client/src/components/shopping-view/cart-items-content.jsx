import { Button } from '../ui/button'
import { Plus,Trash,Minus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem } from '@/store/shop/cart-slice'

function UserCartItemsContent({cartItems}) {
    const {user} = useSelector((state)=>state.auth)
    const dispatch = useDispatch()
    function handleCartItemDelete (getCartItem){
        dispatch(deleteCartItem({userId : user?.id, productId : getCartItem?.productId}))
    }
  return (
    <div className='flex items-center space-x-4'>
       <img src={cartItems?.image} alt={cartItems?.title}
       className='w-20 h-20 object-cover' />
       <div className='flex-1'>
       <h3 className='font-extrabold'>{cartItems?.title}</h3>
<div className='flex items-center mt-1 gap-2'>
    <Button 
    variant="outline"
     size="icon" 
     className="h-8 w-8 rounded-full"
     onClick={()=> handleUpdateQuantity(cartItems, 'plus')}>
        <Minus className='w-4 h-4'/>
            <span className='sr-only'>Decreases</span>
        
    </Button>
    <span className='font-semibold'>{cartItems?.quantity}</span>
    <Button 
    variant="outline"
     size="icon" 
     className="h-8 w-8 rounded-full">
        <Plus className='w-4 h-4'/>
            <span className='sr-only'>Increase</span>
        
    </Button>
</div>
       </div>
       <div className='flex flex-col items-end'>
<p className='font-semibold'>
Rs. {((cartItems?.salePrice > 0 ?cartItems?.salePrice :cartItems?.price) * cartItems?.quantity).toFixed(2)}
</p>
<Trash onClick={()=> handleCartItemDelete(cartItems)} className="cursor-pointer mt-1" size={20}/>
       </div>
    </div>
  )
}

export default UserCartItemsContent