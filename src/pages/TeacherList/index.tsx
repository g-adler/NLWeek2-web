import React from 'react';
import { Link } from 'react-router-dom';


import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponiveis" >
            <form id="search-teachers">
        
            <Select 
            name='subject'
            label='Matéria'
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
                options={ [ 
                    { value: '1', label : 'Segunda' },
                    { value: '2', label : 'Terça' },
                    { value: '3', label : 'Quarta' },
                    { value: '4', label : 'Quinta' },
                    { value: '5', label : 'Sexta' },
                    { value: '6', label : 'Sábado' },
                    { value: '0', label : 'Não' }
                ] } />

                <Input name='time' type='time' label='Hora' />

            </form>
           </PageHeader> 

           <main>
              <TeacherItem /> 
           </main>
            
        </div>
    )
}

export default TeacherList;