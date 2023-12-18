import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  font-family: "Open Sans", sans-serif;
`;

const FilterContainer = styled.div`
  flex: 0 0 30%;
  margin-right: 20px;
`;

const PictureGallery = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const PictureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;

  img {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
    border-radius: 5px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    color: #333;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#f9a826" : "#ccc")};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#f78c00" : "#bbb")};
  }
`;


const pictureData = [
    {
        id: 1,
        name: "Cotton Candy",
        image: "https://www.baskinrobbinsmea.com/wp-content/uploads/2020/05/Cotton-Candy.jpg",
        category: "Rainbow",
    },
    {
        id: 2,
        name: "Moddy Choco",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNb4qLVc8li_M2NHBfEl14DaVpUCmplY5lg&usqp=CAU",
        category: "Chocolate",
    },
    {
        id: 3,
        name: "Popping Star",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wsZrVmvqy6VL4k_cMj3V8fM4A4JiIRPkFw&usqp=CAU",
        category: "Rainbow",
    },
    {
        id: 4,
        name: "Raspberry Passion",
        image: "https://th.bing.com/th/id/OIP.OqI71CUGz0o-fH3Pq0706gHaHa?w=184&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        category: "Fruit",
    },
    {
        id: 5,
        name: "Choc Swirl",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhu_B4Po6ELToO3ASS8D6-PX8ZyLtwex8tzQ&usqp=CAU",
        category: "Chocolate",
    },
    {
        id: 6,
        name: "Nilly Nilla",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCMea3WfNnyq71aUiRzVakN7PIyQPBZIeLg&usqp=CAU",
        category: "Vanilla",
    },
    {
        id: 7,
        name: "Rainbow Heaven",
        image: "https://www.epicuricloud.com/wp-content/uploads/2021/05/Vanilla-Ice-Cream-Cone-up-close-scaled.jpeg",
        category: "Rainbow",
    },
    {
        id: 8,
        name: "Blueberry Icecream",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJ2cP6fasme5jSgjAcFGriiSBcruoPjFI6Q&usqp=CAUg",
        category: "Fruit",
    },
    {
        id: 9,
        name: "Cotton Candy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZLndYJXGyzwMnIIaZPrm2MUhoiutN3NCyA&usqp=CAU",
        category: "Rainbow",
    },
    {
        id: 10,
        name: "Wiskey Lover",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSep65gDA6RH8NsuxV4dIovWT4KPBAjfrMdig&usqp=CAU",
        category: "Chocolate",
    },
    {
        id: 11,
        name: "Vanilla Bowl",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiGaKvnndgUvl9ZrHf_6mSdrcOx6BprB1Ng&usqp=CAU",
        category: "Vanilla",
    },
    {
        id: 12,
        name: "Chock Bomb",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYTdiwGhvLk2R4WCt2qQWuMBNYcssuGm04w&usqp=CAU",
        category: "Chocolate",
    },
    {
        id: 13,
        name: "Mango Ego",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_eQV7eidnPmZ7uKghk6jzJN0M4pTRQEpyg&usqp=CAU",
        category: "Fruit",
    },
    {
        id: 14,
        name: "Egg-free Vanilla",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcYTfIq5D1yeU2CD82b2_buFUUKoA6Rrciug&usqp=CAU",
        category: "Vanilla",
    },
    {
        id: 15,
        name: "French Vanilla",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSejPmybppmiVKL6za-7ufLVTdax-MXvP5Sw&usqp=CAU",
        category: "Fruit",
    },
    {
        id: 16,
        name: "Lollies",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcCyzyqT6Vz2yVC6BX7VN-BWOuo-nB_ydC1gQ51NB1UFhX5ZKX6Dz_1LsLybwFhq0yDk&usqp=CAU",
        category: "Fruit",
    },
    {
        id: 17,
        name: "Skittles Rainbow",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhHlw1rc2IXPuTcendZFmu_jtOdMT1zxc6A&usqp=CAU",
        category: "Rainbow",
    },
    {
        id: 18,
        name: "Banana Choc-chip",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRz4UpQDh8c0hxtNkU-9RFy74Clm3mmVyOLQ&usqp=CAU",
        category: "Chocolate",
    },
];

export default function Filter() {
    // 1. useState

    // 2. handle function

    // 3. filter useEffect

    return (
        <Container>
            <FilterContainer>
                <h2>Filtering Exercise</h2>
                <ButtonContainer>
                    {/* 4. makes 5 buttons for all types, vanilla, chocolate, fruities and fancy */}
                </ButtonContainer>
            </FilterContainer>


            <PictureGallery key={pictureData.id}>
                {/* 5. map over the data, returning elements that display the image, and name */}
            </PictureGallery>
        </Container >
    );
};