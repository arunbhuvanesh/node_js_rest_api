import { v4 as uuidv4 } from 'uuid';
let user=[];
export const getUsers=(req,res)=>{
    res.send(user);
}

export const postUser=(req,res)=>{
    const usr=req.body;
    user.push({ ...usr, id: uuidv4()});
    res.send(`${usr.name} Added into List`);
}

export const getOneuser=(req,res)=>{
    const {id}=req.params;
    const foundusr=user.find((user)=>user.id == id);
    res.send(foundusr);
}

export const deleteUser=(req,res)=>{
    const {id}=req.params;
    user=user.filter((user)=>user.id != id);
    res.send(`This user ${id} removed from Db`);
}

export const updateUser=(req,res)=>{
    const {id}=req.params;
    const {name,mail}=req.body;
    const foundusr=user.find((user)=>user.id == id);
    if(name) foundusr.name=name;
    if(mail) foundusr.mail=mail;
    res.send(`This user ${id} updated into db`);
}