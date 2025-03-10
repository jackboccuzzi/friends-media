import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../Models/user.model';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

/* Replace with DB */
const users: User[] = [];

export const register = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const existingUser = users.find((user: User) => user.username === username);
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists." });
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const newUser: User = {
            id: users.length + 1,
            username,
            passwordHash
        };
        users.push(newUser);
        res.status(200).json({ message: "User created successfully! "})
    } catch (error) {
        res.status(500).json({ message: "There was an error while creating the user!" })
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = users.find((user: User) => user.username === username);

        if (!user || !await bcrypt.compare(password, user.passwordHash)) {
            return res.status(401).json({ message: "Invalid username of password." });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string);
        res.json({ message: "Logged in successfully!" });
    } catch (error) {
        res.status(500).json({ message: 'There was an error while attempting to login!' });
    }
}
