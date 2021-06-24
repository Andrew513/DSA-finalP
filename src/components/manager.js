import React, { Component } from 'react'
import './manager.css'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import { useLocation } from 'react-router';
function Test() {

    const Location = useLocation();
    const [userName,setuserName] = useState(Location.aboutProps.result[0].username);
    const [manager, setmanager] = useState(Location.aboutProps.result[0].managerid);
    const [selecthouse, setselecthouse] = useState(['']);
    const [name, setname] = useState('');
    const [$houseid, sethouseid] = useState('');
    const [$name, setName] = useState('');
    const [$price, setprice] = useState('');
    const [$postcode, setpostcode] = useState('');
    const [$address_city, setaddress_city] = useState('');
    const [$address_area, setaddress_area] = useState('');
    const [$address_vill, setaddress_vill] = useState('');
    const [$address_road, setaddress_road] = useState('');
    const [$pin, setpin] = useState('');
    const [$room, setroom] = useState('');
    const [$living, setliving] = useState('');
    const [$bath, setbath] = useState('');
    const [$age, setage] = useState('');
    const [$floor, setfloor] = useState('');
    const [$sum_floor, setsum_floor] = useState('');
    const [$parking, setparking] = useState('');
    const [$case, setcase] = useState('');
    const [$link, setlink] = useState('');

    const Select = () => {
        console.log(manager);
        let ownhouse = new FormData();
        ownhouse.append("managerid", manager);
        const url = "http://35.174.176.147/final_pro/login/manager_search.php";
        axios.post(url, ownhouse)
            .then(res => {
                console.log(res)
                console.log(res.data)
                setselecthouse(res.data)

            })
            .catch(err => console.log(err));
    }

    const handleAdd = async (e) => {
        await setname(e.target.value)
    }

    const Changename = async (e) => {
        await setName(e.target.value)
    }

    const Changeprice = async (e) => {
        await setprice(e.target.value)
    }

    const Changepostcode = async e => {
        await setpostcode(e.target.value)
    }

    const Changeaddress_city = async e => {
        await setaddress_city(e.target.value)
    }

    const Changeaddress_area = async e => {
        await setaddress_area(e.target.value)
    }

    const Changeaddress_vill = async e => {
        await setaddress_vill(e.target.value)
    }

    const Changeaddress_road = async e => {
        await setaddress_road(e.target.value)
    }

    const Changepin = async e => {
        await setpin(e.target.value)
    }

    const Changeroom = async e => {
        await setroom(e.target.value)
    }

    const Changeliving = async e => {
        await setliving(e.target.value)
    }

    const Changebath = async e => {
        await setbath(e.target.value)
    }

    const Changeage = async e => {
        await setage(e.target.value)
    }

    const Changefloor = async e => {
        await setfloor(e.target.value)
    }

    const Changesum_floor = async e => {
        await setsum_floor(e.target.value)
    }

    const Changeparking = async e => {
        await setparking(e.target.value)
    }

    const Changecase = async e => {
        await setcase(e.target.value)
    }

    const Changelink = async e => {
        await setlink(e.target.value)
    }

    const handleFix = e => {
        e.preventDefault();
        console.log(name);
        let search = new FormData();
        search.append("search_house", name);
        const url = "http://35.174.176.147/final_pro/login/manager_selectdata.php";
        axios.post(url, search)
            .then(res => {
                console.log(res)
                console.log(res.data)
                console.log(res.data[0])
                sethouseid(res.data[0].houseid)
                setName(res.data[0].name)
                setprice(res.data[0].price)
                setpostcode(res.data[0].郵遞區號)
                setaddress_city(res.data[0].縣市)
                setaddress_area(res.data[0].區)
                setaddress_vill(res.data[0].里)
                setaddress_road(res.data[0].address)
                setpin(res.data[0].坪)
                setroom(res.data[0].房)
                setliving(res.data[0].廳)
                setbath(res.data[0].衛)
                setage(res.data[0].屋齡)
                setfloor(res.data[0].樓層)
                setsum_floor(res.data[0].總樓數)
                setparking(res.data[0].停車位)
                setcase(res.data[0].建案)
                setlink(res.data[0].link)
            })
            .catch(err => console.log(err));
    }

    const handleSubmit = e => {
        e.preventDefault();

        let fix = new FormData();
        fix.append("$$houseid", $houseid);
        fix.append("$$name", $name);
        fix.append("$$price", $price);
        fix.append("$$postcode", $postcode);
        fix.append("$$address_city", $address_city);
        fix.append("$$address_area", $address_area);
        fix.append("$$address_vill", $address_vill);
        fix.append("$$address_road", $address_road);
        fix.append("$$pin", $pin);
        fix.append("$$room", $room);
        fix.append("$$living", $living);
        fix.append("$$bath", $bath);
        fix.append("$$age", $age);
        fix.append("$$floor", $floor);
        fix.append("$$sum_floor", $sum_floor);
        fix.append("$$parking", $parking);
        fix.append("$$case", $case);
        fix.append("$$link", $link);

        const url = "http://35.174.176.147/final_pro/login/manager_fix.php";
        axios.post(url, fix)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    const handleInsert = e => {
        e.preventDefault();

        let fix = new FormData();
        fix.append("$$houseid", $houseid);
        fix.append("$$name", $name);
        fix.append("$$price", $price);
        fix.append("$$postcode", $postcode);
        fix.append("$$address_city", $address_city);
        fix.append("$$address_area", $address_area);
        fix.append("$$address_vill", $address_vill);
        fix.append("$$address_road", $address_road);
        fix.append("$$pin", $pin);
        fix.append("$$room", $room);
        fix.append("$$living", $living);
        fix.append("$$bath", $bath);
        fix.append("$$age", $age);
        fix.append("$$floor", $floor);
        fix.append("$$sum_floor", $sum_floor);
        fix.append("$$parking", $parking);
        fix.append("$$case", $case);
        fix.append("$$link", $link);
        fix.append("managerid", manager)

        const url = "http://35.174.176.147/final_pro/login/manager_insert.php";
        axios.post(url, fix)
        .then(res => {
            console.log(res)
            sethouseid('')
            setName('')
            setprice('')
            setpostcode('')
            setaddress_city('')
            setaddress_area('')
            setaddress_vill('')
            setaddress_road('')
            setpin('')
            setroom('')
            setliving('')
            setbath('')
            setage('')
            setfloor('')
            setsum_floor('')
            setparking('')
            setcase('')
            setlink('')

        })
        .catch(err => console.log(err));
    }

    const handleDetete = e => {
        e.preventDefault();
        console.log($houseid);
        let del = new FormData();
        del.append("$$houseid", $houseid);
        const url = "http://35.174.176.147/final_pro/login/manager_delete.php";
        axios.post(url, del)
        .then(res => {
            console.log(res)
            sethouseid('')
            setName('')
            setprice('')
            setpostcode('')
            setaddress_city('')
            setaddress_area('')
            setaddress_vill('')
            setaddress_road('')
            setpin('')
            setroom('')
            setliving('')
            setbath('')
            setage('')
            setfloor('')
            setsum_floor('')
            setparking('')
            setcase('')
            setlink('')

        })
        .catch(err => console.log(err));

    }

    return (
        
        <div>
            {console.log(Location)}
            <div style={{
                overflow:"auto",
                marginTop:"8vh",
                height:"92vh",
                 }}>
                <div className="wrapper" >
                    <div className="title">
                        <label>哈摟 {userName}</label>
                    </div>
                    <div>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button type="submit" variant="contained" color="primary" onClick={handleInsert}>
                                    新增
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button type="submit" variant="contained" color="secondary" onClick={handleDetete}>
                                    刪除
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <br />
                    <div className="form">
                        <div className="inputfield">
                            <div className="custom_select">
                                <select onChange={handleAdd} onClick={Select}>
                                    <option></option>
                                    {selecthouse.map(post => (
                                        <option>({post.houseid}){post.name}</option>
                                    ))}
                                </select>
                            </div>
                            <button onClick={handleFix} id="submit" className="btns">Search</button>
                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className="inputfield">
                                <label>名字</label>
                                <input type="text" value={$name} className="input" onChange={Changename}></input>
                            </div>
                            <div className="inputfield">
                                <label>價格(萬)</label>
                                <input type="text" value={$price} className="input" onChange={Changeprice}></input>
                            </div>
                            <div className="inputfield">
                                <label>郵遞區號</label>
                                <input type="text" value={$postcode} className="input" onChange={Changepostcode}></input>
                            </div>
                            <div className="inputfield">
                                <label>縣市</label>
                                <input type="text" value={$address_city} className="input" onChange={Changeaddress_city}></input>
                            </div>
                            <div className="inputfield">
                                <label>區</label>
                                <input type="text" value={$address_area} className="input" onChange={Changeaddress_area}></input>
                            </div>
                            <div className="inputfield">
                                <label>里</label>
                                <input type="text" value={$address_vill} className="input" onChange={Changeaddress_vill}></input>
                            </div>
                            <div className="inputfield">
                                <label>剩餘地址</label>
                                <input type="text" value={$address_road} className="input" onChange={Changeaddress_road}></input>
                            </div>
                            <div className="inputfield">
                                <label>坪數</label>
                                <input type="text" value={$pin} className="input" onChange={Changepin}></input>
                            </div>
                            <div className="inputfield">
                                <label>房</label>
                                <input type="text" value={$room} className="input" onChange={Changeroom}></input>
                            </div>
                            <div className="inputfield">
                                <label>廳</label>
                                <input type="text" value={$living} className="input" onChange={Changeliving}></input>
                            </div>
                            <div className="inputfield">
                                <label>衛</label>
                                <input type="text" value={$bath} className="input" onChange={Changebath}></input>
                            </div>
                            <div className="inputfield">
                                <label>屋齡</label>
                                <input type="text" value={$age} className="input" onChange={Changeage}></input>
                            </div>
                            <div className="inputfield">
                                <label>樓數</label>
                                <input type="text" value={$floor} className="input" onChange={Changefloor}></input>
                            </div>
                            <div className="inputfield">
                                <label>總樓數</label>
                                <input type="text" value={$sum_floor} className="input" onChange={Changesum_floor}></input>
                            </div>
                            <div className="inputfield">
                                <label>停車場</label>
                                <input type="text" value={$parking} className="input" onChange={Changeparking}></input>
                            </div>
                            <div className="inputfield">
                                <label>建案</label>
                                <input type="text" value={$case} className="input" onChange={Changecase}></input>
                            </div>
                            <div className="inputfield">
                                <label>Link</label>
                                <input type="text" value={$link} className="input" onChange={Changelink}></input>
                            </div>
                            <div className="inputfield">
                                <input type="submit" value="Save" className="btn" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Test;