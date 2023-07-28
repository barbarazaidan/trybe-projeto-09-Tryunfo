# Projeto Tryunfo
## Este repositório contém o desenvolvimento do meu nono projeto na Trybe

Este foi um projeto cheio de detalhes, no qual desenvolvi minhas habilidades com o React. Aqui a ênfase foi no trabalho com estados de componentes e eventos.

## Detalhes do projeto

Confira os requisitos exigidos pela Trybe (texto extraído dos readme oficial da Trybe):

**1. Crie o formulário que será usado para adicionar cartas ao baralho**

<details><summary>Detalhes</summary>
<p>

> Crie um formulário que será utilizado para criar as cartas do seu baralho.

> Crie um componente chamado Form dentro da pasta src/components.

> Renderize o componente Form dentro do componente principal App.

> Crie os seguintes itens dentro do component Form.

</p>
</details>

---

**2. Adicione as props necessárias ao componente de formulário**

<details><summary>Detalhes</summary>
<p>

> As props do componente Form deverão ser utilizadas corretamente

</p>
</details>

---

**3. Crie e renderize o componente Card com as props necessárias**

<details><summary>Detalhes</summary>
<p>

> Crie um componente com o nome Card na pasta src/components e renderize-o no componente principal App. O componente Card deve receber as seguintes props.

> Renderize o componente Card dentro do componente principal App.

</p>
</details>

---

**4. Crie o preview da carta que está sendo criada pelo formulário**

<details><summary>Detalhes</summary>
<p>

> Até o momento você criou dois componentes que recebem props, agora está na hora de criar o estado dos componentes. Os componentes Form e Card irão compartilhar o mesmo estado para exibir as mesmas informações Quando alguma informação é digitada em algum campo do formulário, o componente Card deve exibir a mesma informação em tempo real, criando um preview da carta antes de ela ser salva no baralho.

> Você deverá usar a prop onInputChange para passar uma callback para lidar com os eventos de onChange dos inputs do formulário. Não se esqueça que os valores dos inputs (que também são passados por props) também devem ser salvos em um estado.

</p>
</details>

---

**5. Faça a validação do botão de Salvar no formulário**

<details><summary>Detalhes</summary>
<p>

> O botão que possui o atributo data-testid="save-button" só deve estar habilitado se todas as informações do formulário estiverem preenchidas corretamente, seguindo as seguintes regras:  - Os campos Nome, Descrição, Imagem e Raridade devem conter alguma informação (ou seja, os inputs não podem estar vazios).
> - A soma dos valores dos 3 atributos (attr1-input, attr2-input e attr3-input) não pode ultrapassar o valor 210. 
> - Cada um dos três atributos pode ter no máximo 90 pontos cada. 
> - Os atributos não podem receber valores negativos.

</p>
</details>

---

**6. Crie a função do botão salvar**

<details><summary>Detalhes</summary>
<p>

> Agora que o botão de salvar já está validado, você pode adicionar uma nova carta ao seu baralho. Isso significa que você precisará criar um novo estado na sua aplicação para salvar a lista de cartas existentes no seu baralho.

</p>
</details>

---

**7. Crie a validação do Super Trunfo**

<details><summary>Detalhes</summary>
<p>

> Em um baralho de Super Trunfo pode existir apenas uma carta Super Trunfo. Por isso é necessário fazer uma validação para que somente 1 carta Super Trunfo seja salva no seu baralho

</p>
</details>

---

**8. Exiba a lista de cartas que estão salvas no estado**

<details><summary>Detalhes</summary>
<p>

> Você já tem várias cartas legais em seu baralho, agora é a hora de listá-las para que você possa ver toda sua coleção!

> Renderize dentro do component App uma lista com todas as cartas que você tem no estado da aplicação.

> Garanta que sempre que uma carta for adicionada, a lista é atualizada automaticamente.

</p>
</details>

---

**9. Crie um botão para remover uma carta do baralho**

<details><summary>Detalhes</summary>
<p>

> Criar em cada carta que está sendo renderizada do seu baralho um button com o texto Excluir e o atributo data-testid="delete-button".

</p>
</details>

---

REQUISITOS BÔNUS

**10. Crie o filtro pelo nome da carta**

<details><summary>Detalhes</summary>
<p>

> Para filtro do nome, você deverá criar um campo do tipo text e adicionar o atributo data-testid="name-filter"

</p>
</details>

---

**11. Crie o filtro por raridade da carta**

<details><summary>Detalhes</summary>
<p>

> Para filtrar por raridade, você deverá criar um campo do tipo select e adicionar o atributo data-testid="rare-filter"

</p>
</details>

---

**12. Crie o filtro de Super Trunfo**

<details><summary>Detalhes</summary>
<p>

> Para filtrar por Super Trunfo, você deverá criar um campo do tipo checkbox com a label Super Trunfo e o atributo data-testid="trunfo-filter"

</p>
</details>

---

## Sobre o curso da Trybe
O programa total de estudo conta com mais de 1.500 horas de aulas presenciais e online,divididas ao longo de 12 meses. O conteúdo aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.
