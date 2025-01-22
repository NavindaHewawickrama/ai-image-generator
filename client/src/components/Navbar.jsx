import React from "react";
import styled from "styled-components";
import Button from "./button";
import { AddRounded } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const Container = styled.div`
    flex: 1;
    background: ${({ theme }) => theme.navbar};
    color: ${({ theme }) => theme.text_primary};
    font-weight: bold;
    font-size: 22px;
    padding: 14px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;

const Navbar = () => {
    const Navigate = useNavigate();
    return (
        <Container>
            Gen AI
            <Button
                text="Create New Post"
                leftIcon={<AddRounded style={{ fontSize: '18px' }}
                />}
                onClick={() => Navigate("/post")}
            />
        </Container>
    )
}

export default Navbar;