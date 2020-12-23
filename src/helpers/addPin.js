import { pins } from "../model/pin.js"
import { currentUser } from '../model/user.js'

export const addNewPin = (values) => {
    let newPin = {
        user: currentUser.user,
        title: values[0],
        src: `assets/img/${values[3]}`,
        link: values[2],
        tags: values[1].split(' '),
        creationDate: new Date()
    }
    pins.push(newPin)
}