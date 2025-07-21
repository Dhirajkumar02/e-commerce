import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";

const CartItem = () => {
    return (
        <div className="p-5 shadow-lg border rounded-md">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
                {/* Product Image */}
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img
                        className='w-full h-full object-cover object-top rounded'
                        src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/2/q/g/30-jeans-kneecut-black-crishtaliyo-2fashion-original-imagqy6gzmpwqkge.jpeg"
                        alt="Men Slim Mid Rise Black Jeans"
                    />
                </div>

                {/* Product Info */}
                <div className='ml-5 space-y-1 flex-1'>
                    <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
                    <p className='opacity-70'>Size: L, White</p>
                    <p className='opacity-70 mt-2'>Seller: Crishtaliyo 2fashion</p>

                    <div className="flex space-x-5 items-center text-gray-900 pt-4">
                        <p className="font-semibold">₹199</p>
                        <p className="opacity-50 line-through">₹211</p>
                        <p className="text-green-600 font-semibold">5% Off</p>
                    </div>
                </div>
            </div>

            {/* Quantity & Remove Button */}
            <div className="lg:flex items-center lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2">
                    <IconButton>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className="py-1 px-4 border rounded-sm">3</span>
                    <IconButton sx={{ color: "rgb(145, 85, 253)" }}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>
                <Button sx={{ color: "rgb(145, 85, 253)" }}>remove</Button>
            </div>
        </div>
    );
};

export default CartItem;
