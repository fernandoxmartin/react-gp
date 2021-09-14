import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  decreaseQty,
  increaseQty,
  updateTotal,
  removeAll,
} from "../Redux/actions";
import { Layout } from "../Components/Layout";
import { BiMinus, BiPlus } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Cart = () => {
  const { cart } = useSelector((state) => state);
  const { qty } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTotal());
  }, [qty, dispatch]);

  const onRemove = (e) => {
    dispatch(removeItem(e));
    toast.success("Successfully Removed Item");
  };
  const onCheckout = () => {
    dispatch(removeAll());
    toast.success("Thank You for Purchasing with us!");
  };

  return (
    <Layout>
      <CartContainer>
        <CartItems>
          {cart.prod.map((item) => {
            return (
              <ItemCard key={item.id}>
                <img
                  src={require(`../Assets/${item.product}/${item.img}`).default}
                  alt={item.name}
                />
                <ItemDetails>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <Qty>
                    <button onClick={() => dispatch(decreaseQty(item))}>
                      <BiMinus size={15} />
                    </button>
                    <p>{item.qty}</p>
                    <button onClick={() => dispatch(increaseQty(item))}>
                      <BiPlus size={15} />
                    </button>
                  </Qty>

                  <button onClick={() => onRemove(item)}>
                    <HiOutlineTrash size={25} />
                  </button>
                </ItemDetails>
              </ItemCard>
            );
          })}
        </CartItems>
        <CartTotal>
          <TotalContainer>
            <TotalSection>
              <p>Subtotal</p>
              <p>Shipping</p>
              <h1>Order Total</h1>
            </TotalSection>
            <TotalSection>
              <p>{cart.total}</p>
              <p>Free</p>
              <h1>{cart.total}</h1>
            </TotalSection>
          </TotalContainer>
          <CheckoutButton onClick={() => onCheckout()}>Checkout</CheckoutButton>
        </CartTotal>
      </CartContainer>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Layout>
  );
};

const CartContainer = styled.div`
  width: 90%;
  min-height: 30vh;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${({ theme }) => theme.media.md}) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin: 4rem auto;
  }
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const ItemCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 2rem 0;
  img {
    width: 30%;
    margin-right: 1.5rem;
  }
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    img {
      width: 20%;
      margin-right: 2.5rem;
    }
  }
`;
const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: ${({ theme }) => theme.sizes.sm};
  }
  p {
    font-size: ${({ theme }) => theme.sizes.sm};
  }
  button {
    background: none;
    border: none;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
  }
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

const CartTotal = styled.div`
  width: 100%;
  border-top: 2px solid ${({ theme }) => theme.colors.dark};
  margin-top: 2rem;
`;

const TotalContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TotalSection = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-size: ${({ theme }) => theme.sizes.sm};
  }
  h1 {
    font-size: ${({ theme }) => theme.sizes.lg};
  }
  &:nth-child(2) {
    align-items: flex-end;
  }
`;

const CheckoutButton = styled.button`
  width: 100%;
  height: 2.5rem;
  color: ${({ theme }) => theme.colors.light};
  background: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.sizes.button};
  border: none;
  border-radius: 5px;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  cursor: pointer;
`;

const Qty = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  button {
    background: #fab8ac;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  p {
    padding: 0 1rem;
  }
`;
