export default {
    "formName": "formulario1",
    "questions":[
        {
            "question": "Nombre y apellido",
            "answer": "",
            "inputType": {
                "tag": "input",
                "type": "text",
                "required": true
            }
        },
        {
            "question": "Número de identidad/ Pasaporte/ Tarjeta de residencia",
            "answer": "",
            "inputType": {
                "tag": "input",
                "type": "alphanumeric",
                "required": true
            }
        },
        {
            "question": "Correo Electronico",
            "answer": "",
            "inputType": {
                "tag": "input",
                "type": "email",
                "required": true
            }
        },
        {
            "question": "Número de teléfono",
            "answer": "",
            "inputType": {
                "tag": "input",
                "type": "phone",
                "required": true
            }
        },
        {
            "question": "Ciudad de residencia",
            "answer": "",
            "inputType": {
                "tag": "input",
                "type": "text",
                "required": true
            }
        },
        {
            "question": " ¿Tiene actualmente una póliza de seguro de vehículo vigente?",
            "answer": "",
            "inputType": {
                "tag": "radio",
                "required": true,
                "options": [
                    "Si",
                    "No"
                ],
                "subquestions": {
                    "Si": [
                        {
                            "question": "¿Con cuál compañía de seguros?",
                            "answer": "",
                            "inputType": {
                                "tag": "select",
                                "required": true,
                                "options": [
                                    "Seguros Atlántida",
                                    "Ficohsa Seguros",
                                    "Mapfre Seguros",
                                    "Seguros Crefisa",
                                    "Davivienda Seguros",
                                    "Seguros del País",
                                    "Seguros Lafise",
                                    "Seguros Continental",
                                    "Seguros Banrural",
                                    "Assa Seguros",
                                    "Seguros Equidad"
                                ]
                            }
                        },
                        {
                            "question": "¿Cuándo se vence la póliza?",
                            "answer": "",
                            "inputType": {
                                "tag": "calendar",
                                "type": "date",
                                "required": true
                            }
                        }
                    ],
                    "No": []
                }
            }
        },
        {
            "question": "Tipo de vehículo",
            "answer": "",
            "inputType": {
                "tag": "radio",
                "required": true,
                "options": [
                    "Turismo",
                    "Pick Up",
                    "Camioneta/SUV",
                    "Camion"
                ]
            }
        },
        {
            "question": "Imagen",
            "answer": "",
            "inputType": {
                "tag": "image",
                "type": "image",
                "required": false
            }
        },
        {
            "question": "Estado del vehículo",
            "answer": "",
            "inputType": {
                "tag": "radio",
                "required": true,
                "options": [
                    "Nuevo de Agencia",
                    "Usado de Agencia",
                    "Usado Importado"
                ]
            }
        },
        {
            "question": "Marca de Vehiculo",
            "answer": "",
            "inputType": {
                "tag": "select",
                "options": [
                    "Seat",
                    "Renault",
                    "Peugeot",
                    "Dacia",
                    "Citroën",
                    "Opel",
                    "Alfa Rome",
                    "Škoda",
                    "Chevrolet",
                    "Porsche",
                    "Honda",
                    "Subaru",
                    "Mazda",
                    "Mitsubish",
                    "Lexus",
                    "Toyota",
                    "BMW",
                    "Volkswagen",
                    "Suzuki",
                    "Mercedes-Benz",
                    "Saab",
                    "Audi",
                    "Kia",
                    "Land Rover",
                    "Dodge",
                    "Chrysler",
                    "Ford",
                    "Hummer",
                    "Hyundai",
                    "Infiniti",
                    "Jaguar",
                    "Jeep",
                    "Nissan",
                    "Volvo",
                    "Daewoo",
                    "Fiat",
                    "MINI",
                    "Rover",
                    "Smart"
                ],
                "subquestions": {
                    "Seat": [
                        {
                            "question": "Modelo de Vehiculo",
                            "answer": "",
                            "inputType": {
                                "tag": "select",
                                "required": true,
                                "options": [
                                    "Alhambra",
                                    "Altea",
                                    "Altea XL",
                                    "Arosa",
                                    "Cordoba",
                                    "Cordoba Vario",
                                    "Exeo",
                                    "Ibiza",
                                    "Ibiza ST",
                                    "Exeo ST",
                                    "Leon",
                                    "Leon ST",
                                    "Inca",
                                    "Mii",
                                    "Toledo"
                                ]
                            }
                        }
                    ],
                    "Renault": [
                        {
                            "question": "Modelo de Vehiculo",
                            "answer": "",
                            "inputType": {
                                "tag": "select",
                                "required": true,
                                "options": [
                                    "Captur",
                                    "Clio",
                                    "Clio Grandtour",
                                    "Espace",
                                    "Express",
                                    "Fluence",
                                    "Grand Espace",
                                    "Grand Modus",
                                    "Grand Scenic",
                                    "Kadjar",
                                    "Kangoo",
                                    "Kangoo Express",
                                    "Koleos",
                                    "Laguna",
                                    "Laguna Grandtour",
                                    "Latitude",
                                    "Mascott",
                                    "Mégane",
                                    "Mégane CC",
                                    "Mégane Combi",
                                    "Mégane Grandtour",
                                    "Mégane Coupé",
                                    "Mégane Scénic",
                                    "Scénic",
                                    "Talisman",
                                    "Talisman Grandtour",
                                    "Thalia",
                                    "Twingo",
                                    "Wind",
                                    "Zoé"
                                ]
                            }
                        }
                    ]
                },
                "required": true
            }
        },
        {
            "question": "Año del Vehículo",
            "answer": "",
            "inputType": {
                "tag": "input",
                "type": "number",
                "minValue": "1970",
                "required": true
            }
        },
        {
            "question": "Valor de mercado actual del Vehículo",
            "answer": "",
            "inputType": {
                "tag": "textarea",
                "type": "text",
                "placeholder": "Determinar objetivamente el monto (en Lempiras o dólares americanos) que represente el valor del vehículo en el mercado nacional, considerando marca, modelo, año, kms recorridos, así como la condición física y mecánica del vehículo.",
                "required": true
            }
        },
        {
            "question": "¿Cómo escuchó de Segurú? ",
            "answer": "",
            "inputType": {
                "tag": "radio",
                "required": true,
                "options": [
                    "Recomendación de alguien",
                    "Facebook/Instagram",
                    "Google"
                ]
            }
        },
        {
            "question": "Acepto los términos y condiciones de uso y el aviso de privacidad y declaro que la información es verdadera ",
            "answer": "",
            "inputType": {
                "tag": "checkbox",
                "required": true
            }
        },
        {
            "question": "Quiero que un asesor profesional de Segurú me contacte para brindarme más explicación",
            "answer": "",
            "inputType": {
                "tag": "checkbox",
                "required": false
            }
        }
    ]
      
    }