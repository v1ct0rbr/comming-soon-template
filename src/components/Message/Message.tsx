export default function Message() {

    const  description  = process.env.description || 'description';
    return (
        <p
            className="text-2xl md:text-3xl px-6 max-w-3xl text-center text-slate-800 dark:text-slate-100 font-thin"
            dangerouslySetInnerHTML={{
                __html: description,
            }}>
        </p>
    )
}