import React, { useState, FormEvent } from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList() {

    const [teachers, setTeachers] = useState([])
    const [subject,setSubject] = useState('')
    const [week_day,setWeek_day] = useState('')
    const [time,setTime] = useState('')

    async function searchTeachers(e: FormEvent){
        e.preventDefault()
        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time,
            }
        })
        setTeachers(response.data)
    }

    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponiveis" >
            <form id="search-teachers" onSubmit={searchTeachers}>
        
            <Select 
            name='subject'
            label='Matéria'
            value={subject}
            onChange={
                e => {setSubject(e.target.value)}
            }
            options={ [ 
                { value: 'Artes', label : 'Artes' },
                { value: 'Biologia', label : 'Biologia' },
                { value: 'Matemática', label : 'Matemática' },
                { value: 'Química', label : 'Química' },
                { value: 'Socialismo como um valor absoluto de paz entre as sociedades', label : 'Socialismo como um valor absoluto de paz entre as sociedades' }
            ] } />

            <Select 
                name='week_day'
                label='Dia da semana'
                value={week_day}
                onChange={
                    e => {setWeek_day(e.target.value)}
                }
                options={ [ 
                    { value: '1', label : 'Segunda' },
                    { value: '2', label : 'Terça' },
                    { value: '3', label : 'Quarta' },
                    { value: '4', label : 'Quinta' },
                    { value: '5', label : 'Sexta' },
                    { value: '6', label : 'Sábado' },
                    { value: '0', label : 'Não' }
                ] } />

                <Input 
                name='time'
                value={time}
                onChange={
                    e => {
                        setTime(e.target.value)
                    }

                }
                type='time'
                label='Hora' />
                <button type='submit'>Buscar</button>
            </form>
           </PageHeader> 

           <main>
               {teachers.map(teacher => {
                   return <TeacherItem/>
               })}
           </main>
            
        </div>
    )
}

export default TeacherList;