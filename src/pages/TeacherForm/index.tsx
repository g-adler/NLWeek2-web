import React, {useState} from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day:0,from: '',to: ''}
  ])

  function addNewScheduleItem () {
    setScheduleItems([
      ...scheduleItems,
      { week_day:0,from: '',to: ''}

    ]);
  }

  return (
    <div id='page-teacher-form' className='container ' >
      <PageHeader
        title='Que incrível que você quer dar aulas'
        description='O primeiro passo é preencher esse formulário de inscrição'
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>

          <Input name='name' label='Nome completo' />
          <Input name='avatar' label='Avatar' />
          <Input name='whatsapp' label='Whatsapp' />
          <Textarea name='bio' label='Biografia' />
        </fieldset>

        <fieldset>
          <legend>Sobre a Aula</legend>

          <Select 
            name='subject'
            label='Matéria'
            options={ [ 
              { value: 'Artes', label : 'Artes' },
              { value: 'Biologia', label : 'Biologia' },
              { value: 'Matemática', label : 'Matemática' },
              { value: 'Química', label : 'Química' },
              { value: 'Socialismo como um valor absoluto de paz entre as sociedades', label : 'Socialismo como um valor absoluto de paz entre as sociedades' }
             ] }
          />
          <Input name='cost' label='Custo da sua Hora/aula' />

        </fieldset>

        <fieldset>
          <legend>Horários Disponíveis
            <button onClick={addNewScheduleItem} type='button'> + Novo horário
            </button>
          </legend>
          {scheduleItems.map(scheduleItem => {
            return(
              <div key={scheduleItem.week_day} className="schedule-item">
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
                    ] }
                />
                <Input name='from' label='Das' type='time'/>
                <Input name='to' label='Até' type='time'/>  
            </div> 
            )}
            )}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt='Aviso imporante' />
           Importante! <br />
           Preencha Todos os dados
          </p>
          <button type='button'>
            Salvar Cadastro
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;
