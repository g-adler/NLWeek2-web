import React, { useState, FormEvent } from 'react';
import {useHistory} from 'react-router-dom'
import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm() {
  const history = useHistory()
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')
  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ])

  function setScheduleItemValue(position:number, field:string, value:string){
    const updatedScheduleItems = scheduleItems.map((scheduleItem,index)=>{
      if(index === position){
        return {...scheduleItem,[field]:value}
      } 
      return scheduleItem
    })
    setScheduleItems(updatedScheduleItems)
  }

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }

    ]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault()
    // console.log(api.request.apply)
    api.post('classes',{
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems

    }).then(()=>{
      history.push('/')
      alert('Cadastro realizado com sucesso!')

    }).catch(()=>{

      alert('Erro no cadastro!')

    })
  }

  return (
    <div id='page-teacher-form' className='container ' >
      <PageHeader
        title='Que incrível que você quer dar aulas'
        description='O primeiro passo é preencher esse formulário de inscrição'
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>

            <Input name='name' value={name} onChange={(e) => { setName(e.target.value) }} label='Nome completo' />
            <Input name='avatar' value={avatar} onChange={(e) => { setAvatar(e.target.value) }} label='Avatar' />
            <Input name='whatsapp' value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} label='Whatsapp' />
            <Textarea name='bio' value={bio} onChange={(e) => { setBio(e.target.value) }} label='Biografia' />
          </fieldset>

          <fieldset>
            <legend>Sobre a Aula</legend>

            <Select
              name='subject'
              label='Matéria'
              value={subject}
              onChange={(e) => { setSubject(e.target.value) }}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Química', label: 'Química' },
                { value: 'Socialismo como um valor absoluto de paz entre as sociedades', label: 'Socialismo como um valor absoluto de paz entre as sociedades' }
              ]}
            />
            <Input name='cost' value={cost} onChange={(e) => { setCost(e.target.value) }} label='Custo da sua Hora/aula' />

          </fieldset>

          <fieldset>
            <legend>Horários Disponíveis
            <button onClick={addNewScheduleItem} type='button'> + Novo horário
            </button>
            </legend>
            {scheduleItems.map((scheduleItem,index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name='week_day'
                    label='Dia da semana'
                    value={scheduleItem.week_day}
                    onChange={e=>setScheduleItemValue(index,'week_day', e.target.value)}
                    options={[
                      { value: '1', label: 'Segunda' },
                      { value: '2', label: 'Terça' },
                      { value: '3', label: 'Quarta' },
                      { value: '4', label: 'Quinta' },
                      { value: '5', label: 'Sexta' },
                      { value: '6', label: 'Sábado' },
                      { value: '0', label: 'Não' }
                    ]}
                  />
                  <Input name='from'
                   label='Das'
                   value={scheduleItem.from}
                   onChange={e=>setScheduleItemValue(index,'from', e.target.value)}
                   type='time' />
                  <Input name='to'
                    label='Até'
                    value={scheduleItem.to}
                    onChange={e=>setScheduleItemValue(index,'to', e.target.value)}
                    type='time' />
                </div>
              )
            }
            )}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt='Aviso imporante' />
           Importante! <br />
           Preencha Todos os dados
          </p>
            <button type='submit'>
              Salvar Cadastro
          </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm;
