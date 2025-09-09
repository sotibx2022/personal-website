"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { Info } from 'lucide-react'
import { useRouter } from 'next/navigation'
const AdminLoginPage: React.FC = () => {
    const router = useRouter()
    const [passwordValue, setPasswordValue] = useState<string>('')
    const validatePassword = async () => {
        try {
            const response = await axios.post('/api/adminLogin', {
                password: passwordValue
            })
            if (response.data.success) {
                router.push('/addblogforbinayarajpersonalwebsite')
            } else {
                alert('Invalid password')
                router.push('/')
            }
        } catch (error) {
            console.error('Login error:', error)
            alert('Something went wrong')
        }
    }
    return (
        <div className="page">
            <div className="form-group adminForm">
                <div className="input-label">
                    <label htmlFor="admin-password">Access</label>
                </div>
                <p className="warning-message">
                    <Info className="inline mr-1" /> Site Owner Only.
                </p>
                <input
                    id="admin-password"
                    type="password"
                    className="form-input"
                    value={passwordValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPasswordValue(e.target.value)
                    }
                />
                <button onClick={validatePassword} className="btn">
                    Submit
                </button>
            </div>
        </div>
    )
}
export default AdminLoginPage
