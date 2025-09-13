import React from "react";
import { Mail, User, MessageSquare, Hash } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import axios from "axios";
const contactSchema = z.object({
    fullName: z.string().min(3, "Full Name must be at least three characters"),
    email: z.string().email("Invalid Email Address"),
    subject: z.string().min(10, "Subject must be at least 10 characters"),
    message: z.string().min(20, "Message must be at least 20 characters"),
});
type IContactFormData = z.infer<typeof contactSchema>;
const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<IContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onSubmit",
    });
    const contactFormMutation = useMutation({
        mutationFn: async (data: IContactFormData) => {
            emailjs
  .send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Service ID
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Template ID
    {
      from_name: data.fullName,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_email: "sbinayarajsoti@gmail.com",
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Public Key
  )
        }, onSuccess: () => {
            alert('Your Query Submitted.')
            reset()
        }, onError: () => {
            alert('Error To Submit Query')
        }
    })
    const onSubmit = (data: IContactFormData) => {
        contactFormMutation.mutate(data);
    };
    return (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <div className="form-group">
                <div className="input-label">
                    <User size={20} className="label-icon" />
                    <span className="label-text">Your Name</span>
                </div>
                <input
                    type="text"
                    {...register("fullName")}
                    placeholder="e.g. John Doe"
                    className="form-input"
                />
                {errors.fullName?.message && (
                    <span className="errorMessage">{errors.fullName.message}</span>
                )}
            </div>
            {/* Email */}
            <div className="form-group">
                <div className="input-label">
                    <Mail size={20} className="label-icon" />
                    <span className="label-text">Your Email</span>
                </div>
                <input
                    type="text"
                    {...register("email")}
                    placeholder="e.g. johndoe@example.com"
                    autoComplete="off"
                    className="form-input"
                />
                {errors.email?.message && (
                    <span className="errorMessage">{errors.email.message}</span>
                )}
            </div>
            {/* Subject */}
            <div className="form-group">
                <div className="input-label">
                    <Hash size={20} className="label-icon" />
                    <span className="label-text">Subject</span>
                </div>
                <input
                    type="text"
                    {...register("subject")}
                    placeholder="e.g. Website Project Inquiry"
                    className="form-input"
                />
                {errors.subject?.message && (
                    <span className="errorMessage">{errors.subject.message}</span>
                )}
            </div>
            {/* Message */}
            <div className="form-group">
                <div className="input-label">
                    <MessageSquare size={20} className="label-icon" />
                    <span className="label-text">Your Message</span>
                </div>
                <textarea
                    {...register("message")}
                    placeholder="e.g. I'd like to discuss a website project for my business..."
                    className="form-textarea"
                />
                {errors.message?.message && (
                    <span className="errorMessage">{errors.message.message}</span>
                )}
            </div>
            <div>
                {contactFormMutation.isPending ? <input type="submit" value="Submitting..." className="btn submit-btn" disabled /> : <input type="submit" value="Send Message" className="btn submit-btn" />}
            </div>
        </form>
    );
};
export default ContactForm;
