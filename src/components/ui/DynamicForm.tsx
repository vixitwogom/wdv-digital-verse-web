// components/DynamicForm.tsx
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { FieldConfig } from "@/types/types";
import { Button } from "@/components/ui/button"; // adjust as per your setup
import { Send } from "lucide-react";

interface Props {
    fields: FieldConfig[];
    onSubmit: (data: any) => void;
}

const baseFieldClass =
    "w-full px-3 py-2 border border-black rounded-md text-black bg-white";

const DynamicForm: React.FC<Props> = ({ fields, onSubmit }) => {
    const methods = useForm();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = methods;

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {fields.map((field) => (
                    <div key={field.name}>
                        <label
                            htmlFor={field.name}
                            className="block text-sm font-semibold text-left text-[#012345] mb-2"
                        >
                            {field.label} {field.required && "*"}
                        </label>

                        {field.type === "textarea" ? (
                            <textarea
                                id={field.name}
                                {...register(field.name, { required: field.required })}
                                placeholder={field.placeholder}
                                className={`${baseFieldClass}`}
                            />
                        ) : field.type === "select" ? (
                            <select
                                id={field.name}
                                {...register(field.name, { required: field.required })}
                                className={`${baseFieldClass}`}
                            >
                                <option value="" className="text-black">
                                    Select an option
                                </option>
                                {field.options?.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                        className="text-black"
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                id={field.name}
                                type={field.type}
                                {...register(field.name, { required: field.required })}
                                placeholder={field.placeholder}
                                className={`${baseFieldClass}`}
                            />
                        )}

                        {errors[field.name] && (
                            <p className="text-red-500 text-sm mt-1">
                                {field.label} is required.
                            </p>
                        )}
                    </div>
                ))}

                <Button
                    type="submit"
                    className="w-full bg-[#1068b2] text-white hover:bg-[#1068b2] font-semibold"
                >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                </Button>
            </form>
        </FormProvider>
    );
};

export default DynamicForm;
