import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
  return(
    <article className='teacher-item'>
      <header>
        <img src='' alt=''/>
        <div>
          <strong>Nome do infeliz</strong>
          <span>Matéria</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor rhoncus dolor purus non enim praesent elementum. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Purus semper eget duis at tellus. Viverra orci sagittis eu volutpat odio facilisis mauris. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Vulputate sapien nec sagittis aliquam malesuada. Sit amet venenatis urna cursus. <br/> Arcu ac tortor dignissim convallis aenean et. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat.
      </p>
        <footer>
          <p>
            Preço/Hora
            <strong> R$850,00</strong>
            <button type='button'>
              <img src={wppIcon} alt='WPP'/>
              Entrar em contato
            </button>
          </p>
        </footer>
    </article>
  );
}
export default TeacherItem;
