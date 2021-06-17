import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {connect, useDispatch} from "react-redux";
import {allSock, blueSock, redSock, whiteSock} from "../store/contactSlice";

const Title = styled.tr`
  background-color: black;
  color: white;
`

const Table = ({red, blue, white, all}) => {
    const dispatch = useDispatch();


    const [redColour, setRedColour] = useState('');
    const [blueColour, setBlueColour] = useState('');
    const [whiteColour, setWhiteColour] = useState('');


    const onChangeRed = (fild, value) => {
        setRedColour(prevState => ({...prevState, [fild]: value }));

    }
    const onChangeBlue = (fild, value) => {
        setBlueColour(prevState => ({...prevState, [fild]: value }));

    }
    const onChangeWhite = (fild, value) => {
        setWhiteColour(prevState => ({...prevState, [fild]: value }));

    }


    const changeValue = () => {
            if(redColour) {
                dispatch(redSock(redColour))
            }
            if(blueColour){
                dispatch(blueSock(blueColour))
            }
            if(whiteColour){
                dispatch(whiteSock(whiteColour))
            }
            if(redColour.count !== undefined & redColour.price !== undefined && blueColour.count !== undefined && blueColour.price !== undefined
            && whiteColour.count !== undefined && whiteColour.price !== undefined) {
                dispatch(allSock())
            }
    }



    useEffect(() => {
       changeValue()
    }, [redColour, blueColour, whiteColour])




    return (
        <div className='main'>
            <table>
                <thead>
                    <Title>
                        <th>Название товара</th>
                        <th>Количество</th>
                        <th>Стоимость 1 ед.</th>
                        <th className='allPrice'>Общая стоимость</th>
                    </Title>
                </thead>
                <tbody>
                    <tr>
                        <td className='name'>Красный носок</td>
                        <td><input onChange={(event) => onChangeRed('count', event.target.value)} type="number"/></td>
                        <td><input onChange={(event) => onChangeRed('price', event.target.value)} type="number"/></td>
                        <td className='count'>{red}</td>
                    </tr>
                    <tr>
                        <td className='name'>Синий носок</td>
                        <td><input onChange={(event) => onChangeBlue('count', event.target.value)}  type="number"/></td>
                        <td><input onChange={(event) => onChangeBlue('price', event.target.value)}  type="number"/></td>
                        <td className='count'>{blue}</td>
                    </tr>
                    <tr>
                        <td className='name'>Бесцветный носок</td>
                        <td><input onChange={(event) => onChangeWhite('count', event.target.value)}  type="number"/></td>
                        <td><input onChange={(event) => onChangeWhite('price', event.target.value)}  type="number"/></td>
                        <td className='count'>{white}</td>
                    </tr>
                    <tr>
                        <td className='result' colSpan="3" align="center">Общая стоимость всех товаров</td>
                        <td className='result_numb'>{all}</td>
                    </tr>
                </tbody>
          </table>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        red: state.toolkit.red,
        blue: state.toolkit.blue,
        white: state.toolkit.white,
        all: state.toolkit.all
    }
}

export default connect(mapStateToProps) (Table);