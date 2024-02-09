"use client"
import { FormGroup } from "@/components/FormGroup"
import { FormEvent, Suspense, useRef } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"

export function SearchForm({ userSelect }: { userSelect: JSX.Element }) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathName = usePathname()
    const queryRef = useRef<HTMLInputElement>(null);
    const userRef = useRef<HTMLSelectElement>(null)
    const query = searchParams.get("q") || ""
    const userId = searchParams.get("userId") || ""


    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        const params = new URLSearchParams(searchParams)

        params.set("q", queryRef.current?.value || "")
        params.set("userId", userRef.current?.value || "")

        router.push(`${pathName}?${params.toString()}`)
    }

    return (
        <form className="form mb-4" onSubmit={handleSubmit}>
            <div className="form-row">
                <FormGroup>
                    <label htmlFor="query">Query</label>
                    <input defaultValue={query} name="q" type="search" id="query" ref={queryRef} />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="userId">Author</label>
                    <select name="userId" id="userId" ref={userRef}>
                        <Suspense fallback={<option value="">Loading...</option>}>
                            {userSelect}
                        </Suspense>
                    </select>
                </FormGroup>
                <button className="btn">Filter</button>

            </div>
        </form>
    )
}
