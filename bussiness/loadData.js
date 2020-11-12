export default async function loadData() {
    const delay = 2000
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    id: 11937,
                    name: "Capão da Canoa",
                    regiao: "Zona Nova",
                    info: "APTO. 4 DORMITÓRIOS OU +",
                    m2: "331.09M²",
                    domitorios: 4,
                    suites: 2,
                    vagas: 2,
                    value: 2560000,
                    imgs: [
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11937/medium/5ef50616eeadf.jpeg",
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11937/big/5ef506177c3b2.jpeg",
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11937/big/5ef5061812608.jpeg",
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11937/big/5ef506191a728.jpeg",
                    ],
                },
                {
                    id: 11820,
                    name: "XANGRI-LÁ",
                    regiao: "Malibú",
                    info: "CASA CONDOMÍNIO FECHADO",
                    m2: "350m²",
                    domitorios: 3,
                    suites: 3,
                    vagas: 2,
                    value: 2700000,
                    imgs: [
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11820/big/5ec7dc4187201.jpeg",
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11820/big/5ec7dc4896f70.jpeg",
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11820/big/5ec7dc473811c.jpeg",
                    ],
                },
                {
                    id: 11785,
                    name: "CAPÃO DA CANOA",
                    regiao: "Murano",
                    info: "CASA CONDOMÍNIO FECHADO",
                    domitorios: 3,
                    imgs: [
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11785/big/5ebc3a5447f39.jpg",
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11785/big/5ebc3a59b468a.jpg",
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11785/big/5ebc3a5c3eeb3.jpg",
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11820/big/5ec7dc29ebe03.jpeg",
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11785/big/5ebc3a5e54ad4.jpg",
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11785/big/5ebc3a5c3eeb3.jpg",
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11820/big/5ec7dc29ebe03.jpeg",
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11785/big/5ebc3a5e54ad4.jpg",
                    ],
                },
                {
                    id: 11705,
                    name: "Capão da Canoa",
                    regiao: "Navegantes",
                    info: "APTO. 4 DORMITÓRIOS OU +",
                    domitorios: 4,
                    suites: 4,
                    vagas: 2,
                    value: 4800000,
                    imgs: [
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11705/big/5eb442157a78a.jpg",
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11705/big/5eb44209a6876.jpg",
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11705/big/5eb4420ceca9c.jpg",
                        "https://cdnagil.eusouagil.com.br/agil_users/4/properties/11705/big/5eb4421108747.jpg",
                    ],
                },
            ]
            )
        }, delay)
    })
}