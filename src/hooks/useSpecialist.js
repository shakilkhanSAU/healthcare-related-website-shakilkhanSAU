import { useEffect, useState } from "react"

const useSpecialist = () => {
    const [doctors, setDoctors] = useState();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/shakilkhanSAU/fakeData/main/specialist.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
            .catch(error => {
                console.log(error)
            })
    }, []);

    return {
        doctors
    }
}

export default useSpecialist;