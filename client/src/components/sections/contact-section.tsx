import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../../hooks/use-toast";
import { apiRequest } from "../../queryClient";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PHONE_NUMBER, EMAIL_CONTACT } from "@/lib/constants";
import { Phone, Mail, Linkedin, Twitter, Facebook, Youtube, ArrowRight } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    company: z.string().min(2, { message: "Company name is required" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    phone: z.string().min(5, { message: "Please enter a valid phone number" }),
    message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
    const { toast } = useToast();

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const mutation = useMutation({
        mutationFn: async (data: FormValues) => {
            const response = await apiRequest("POST", "/api/contact", data);
            return response.json();
        },
        onSuccess: () => {
            toast({
                title: "Success!",
                description: "Your demo request has been submitted. We'll contact you shortly.",
            });
            form.reset();
        },
        onError: (error) => {
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
                variant: "destructive",
            });
        },
    });

    const onSubmit = (data: FormValues) => {
        mutation.mutate(data);
    };

    return (
        <section className="section-spacing bg-black text-white relative overflow-hidden" id="contact">
            {/* Background grid pattern */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
                </div>
            </div>

            <div className="container max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                {/* Two column layout for heading and description */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-white font-light mb-6">
                                Ready to transform your operations?
                            </h2>
                            <div className="h-[1px] w-16 bg-white/20 my-8"></div>
                        </motion.div>
                    </div>

                    <div>
                        <motion.p
                            className="text-white/80 text-lg font-light mb-6 max-w-xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Schedule a demo today and see how FlowOps can revolutionize your manufacturing shop floor with AI-powered efficiency solutions.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="text-white">
                            <motion.div
                                className="space-y-8 mb-12"
                                variants={{
                                    hidden: { opacity: 0 },
                                    show: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.2
                                        }
                                    }
                                }}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="flex items-center group"
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        show: { opacity: 1, x: 0 }
                                    }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-5 group-hover:bg-white/20 transition-colors duration-300">
                                        <Phone className="text-white h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-white font-light text-lg">Call us directly</p>
                                        <motion.a
                                            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                                            className="text-white/80 hover:text-white relative inline-block"
                                            whileHover={{ x: 3 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            {PHONE_NUMBER}
                                            <motion.span
                                                className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30"
                                                initial={{ scaleX: 0, originX: 0 }}
                                                whileHover={{ scaleX: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-center group"
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        show: { opacity: 1, x: 0 }
                                    }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-5 group-hover:bg-white/20 transition-colors duration-300">
                                        <Mail className="text-white h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-white font-light text-lg">Email us</p>
                                        <motion.a
                                            href={`mailto:${EMAIL_CONTACT}`}
                                            className="text-white/80 hover:text-white relative"
                                            whileHover={{ x: 3 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            {EMAIL_CONTACT}
                                            <motion.span
                                                className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30"
                                                initial={{ scaleX: 0, originX: 0 }}
                                                whileHover={{ scaleX: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <div>
                                <p className="text-white font-light mb-4">Follow Us</p>
                                <div className="flex space-x-4">
                                    {[
                                        { Icon: Linkedin, label: "LinkedIn" },
                                        { Icon: Twitter, label: "Twitter" },
                                        { Icon: Facebook, label: "Facebook" },
                                        { Icon: Youtube, label: "YouTube" }
                                    ].map((item, index) => (
                                        <motion.a
                                            key={item.label}
                                            href="#"
                                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white/40 transition-all duration-300"
                                            aria-label={item.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                            whileHover={{ y: -3 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            <item.Icon size={18} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        id="demo"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Decorative elements */}
                        <motion.div
                            className="absolute -top-8 -left-8 w-16 h-16 border border-white/10 rounded-md z-0"
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <motion.div
                            className="absolute -bottom-8 -right-8 w-20 h-20 border border-white/10 rounded-md z-0"
                            animate={{ rotate: [0, -15, 0] }}
                            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <div className="bg-white p-10 rounded-xl relative z-10">
                            <div className="mb-8">
                                <h3 className="text-xl font-light text-black mb-2">
                                    Schedule a Demo
                                </h3>
                                <div className="h-[1px] w-12 bg-black/10 my-4"></div>
                            </div>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                                    {[
                                        {
                                            name: "name",
                                            label: "Full Name",
                                            placeholder: "John Smith",
                                            type: "text"
                                        },
                                        {
                                            name: "company",
                                            label: "Company Name",
                                            placeholder: "Acme Manufacturing",
                                            type: "text"
                                        },
                                        {
                                            name: "email",
                                            label: "Email Address",
                                            placeholder: "john@acmemanufacturing.com",
                                            type: "email"
                                        },
                                        {
                                            name: "phone",
                                            label: "Phone Number",
                                            placeholder: "+1 (123) 456-7890",
                                            type: "tel"
                                        }
                                    ].map((field, index) => (
                                        <motion.div
                                            key={field.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.1 * index }}
                                        >
                                            <FormField
                                                control={form.control}
                                                name={field.name as any}
                                                render={({ field: fieldProps }) => (
                                                    <FormItem className="relative">
                                                        <FormLabel className="text-black/80 font-light text-sm mb-2 block">
                                                            {field.label}
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type={field.type}
                                                                placeholder={field.placeholder}
                                                                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black/20 focus:border-black/20 transition-all duration-200 text-black/80 bg-white"
                                                                {...fieldProps}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </motion.div>
                                    ))}

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.5 }}
                                    >
                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-black/80 font-light text-sm mb-2 block">
                                                        Tell us about your needs
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="What challenges are you looking to solve?"
                                                            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black/20 focus:border-black/20 transition-all duration-200 text-black/80 bg-white"
                                                            rows={4}
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.6 }}
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        className="relative pt-2"
                                    >
                                        <Button
                                            type="submit"
                                            className="w-full bg-black hover:bg-black/90 text-white font-light px-6 py-4 rounded-md transition-all duration-300 relative overflow-hidden group h-auto"
                                            disabled={mutation.isPending}
                                        >
                                            <span className="relative z-10 flex items-center justify-center">
                                                {mutation.isPending ? "Submitting..." : "Schedule Demo"}
                                                {!mutation.isPending && <ArrowRight className="ml-2 h-4 w-4 inline-block group-hover:translate-x-1 transition-transform duration-200" />}
                                            </span>
                                        </Button>
                                    </motion.div>
                                </form>
                            </Form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
