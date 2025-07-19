import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";
let renderCount = 0

type FormValues = {
    name: string
    email: string
    message: string
}

export const ContactForm = () => {
    const form = useForm<FormValues>();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const onSubmit = (data: FormValues) => {
        console.log("Form sumitted", data)
    }
    renderCount++

    return (
        <div>
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-control">

                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required"
                            },
                        })}
                    />
                    <p className="error">{errors.name?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your valid email"
                        {...register("email", {
                            pattern: {
                                value:
                                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "Invalid email format",
                            }
                        })}
                    />
                    <p className="error">{errors.email?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input
                        type="text"
                        id="channel"
                        placeholder="Your message"
                        {...register("message", {
                            required: "Message is required"
                        })}
                    />
                    <p className="error">{errors.message?.message}</p>
                </div>


                <button>Submit</button>
            </form>
            <DevTool control={control} />
        </div>
    )
}
