import React from 'react'
import { arrMesteri } from '@/app/utility/constants'

interface PageProps { params: Promise<{ id: string }> }

const Maestru = async ({ params }: PageProps) => {
    const { id } = await params

    const maestru = arrMesteri.find((item) => item.id.toString() === id)


    if (!maestru) {
        return <div>Maestrul nu a fost găsit.</div>
    }

    return (
        <div>
            <h1>{maestru.nume}</h1>
            <p>ID-ul curent: {id}</p>
        </div>
    )
}

export default Maestru