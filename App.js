import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from './Desenvolvimento/Login/Login'
import Home from './Desenvolvimento/Telas/Homes/TelaInicial';
import TelaInicialLaboratorio from './Desenvolvimento/Telas/Homes/TelaInicialLaboratorio';
import Programacao from './Desenvolvimento/Telas/EnsaiosGeotecnico/Programação/ListaProgramacao';
import TeorAgua from './Desenvolvimento/Telas/EnsaiosGeotecnico/Teoragua/teoragua';
import Compactacao from './Desenvolvimento/Telas/EnsaiosGeotecnico/Compactacao/compactacao';
import FrascoAreia from './Desenvolvimento/Telas/EnsaiosGeotecnico/Frasco de Areia/Frascoareia';
import Hilf from './Desenvolvimento/Telas/EnsaiosGeotecnico/Hilf/Hilf';
import Peneiramento from './Desenvolvimento/Telas/EnsaiosGeotecnico/Peneiramento/Peneiramento';
import Seriepeneira from './Desenvolvimento/Telas/EnsaiosGeotecnico/Peneiramento/Seriepeneiras';
import MassaEspecificaGraos from './Desenvolvimento/Telas/EnsaiosGeotecnico/Solo Massa Especifica dos Graos/massaespecificagraos';
import Peneiramentosedimentacao from './Desenvolvimento/Telas/EnsaiosGeotecnico/Peneiramento sedimentacao/Peneiramentosedimentacao';
import IndiceSuporteCalifornia from './Desenvolvimento/Telas/EnsaiosGeotecnico/CBR/indicesuportecalifornia';
import CBRExpansao from './Desenvolvimento/Telas/EnsaiosGeotecnico/CBR/cbrexpansao';
import CBRPenetracao from './Desenvolvimento/Telas/EnsaiosGeotecnico/CBR/cbrpenetracao';
import ControleLama from './Desenvolvimento/Boletim Diario de Sondagem/Controle consumivel/ContrLama';
import LimitesLiquidezPlasticidade from './Desenvolvimento/Telas/EnsaiosGeotecnico/Solo Limites de Liquez e Plasticidade/limitesliquidezplasticidade';
import PermeabilidadeConstante from './Desenvolvimento/Telas/EnsaiosGeotecnico/Permeabilidade carga constante/PermeabilidadeConstante';
import PermeabilidadeVariavel from './Desenvolvimento/Telas/EnsaiosGeotecnico/Permeabilidade carga variavel/PermeabilidadeVariavel';
import MassaAparenteLonaPlastica from './Desenvolvimento/Telas/EnsaiosGeotecnico/Massa Especifica Aparente Lona Plastica/MassaAparenteLonaPlastica';
import CilindroCravacao from './Desenvolvimento/Telas/EnsaiosGeotecnico/Compactacao Cilindro Cravacao/CilindroCravacao';
import DeterminacaoMassaEspecificaAparente from './Desenvolvimento/Telas/EnsaiosGeotecnico/Determinação Massa Especifica Aparente/determinacaomassaespecificaaparente';
import MassaEspecificaMaximaMinimaAreia from './Desenvolvimento/Telas/EnsaiosGeotecnico/Massa Especifica Maxima Minima de Areia/massaespecificamaximaminimaareia';
import TelaPesquisaMineral from './Desenvolvimento/Telas/Homes/telapesquisamineral';
import Teste from './Desenvolvimento/Boletim Diario de Sondagem/index.js'
import NewTAskApropriacao from './Desenvolvimento/Boletim Diario de Sondagem/New Task Apropriação/NewTaskApropriacao'
import HomeScreen from './Desenvolvimento/Boletim Diario de Sondagem/HomeScreen';
import ControleConsumivel from './Desenvolvimento/Boletim Diario de Sondagem/Controle consumivel/ControleConsumivel';
// FrascoAreia
import CadastroPesquisa from './Desenvolvimento/Boletim Diario de Sondagem/CadastroPesquisa/CadastroPesquis';
import EditIndex from './Desenvolvimento/Boletim Diario de Sondagem/editindex';
import SondagemPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/SondaPesquisaMineral/SondaPesquisaMineral'
import TurnoPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/TurnoPesquisaMineral/TurnoPesquisaMineral';
import TelaManutencao from './Desenvolvimento/Telas/Manutencao/Telamanutencao';
import TelaOS from './Desenvolvimento/Telas/Manutencao/TelaOS';
import ManutencaoPesquisaOS from './Desenvolvimento/Telas/Manutencao/ManutencaoPesquisaOS';
import Manutencao from './Desenvolvimento/Telas/Manutencao/Manutencao';




//Sondagem TelaEnsaios INA
import TelaSondagem from './Desenvolvimento/sondagem/TelaSondagem';
import FuroSondagem from './Desenvolvimento/sondagem/furosondagem';
import CadastroFuroSondagem from './Desenvolvimento/sondagem/cadastroFuroSondagem';
import CadastroPesquisaSondagem from './Desenvolvimento/sondagem/CadastroPesquisaSondagem/CadastroPesquisaSondagem';
import SondaSondagem from './Desenvolvimento/sondagem/SondaSondagem/SondaSondagem';
import TurnoSondagem from './Desenvolvimento/sondagem/TurnoSondagem/TurnoSondagem';
import DiametroSondagem from './Desenvolvimento/sondagem/DiametroSondagem/DiametroSondagem';
import LitologiaSondagem from './Desenvolvimento/sondagem/LitologiaSondagem/LitologiaSondagem';
import MaterialSondagem from './Desenvolvimento/sondagem/MaterialSondagem/MaterialSondagem';
import AtividadeSondagem from './Desenvolvimento/sondagem/AtividadeSondagem/AtividadeSondagem';
import EmpresaSondagem from './Desenvolvimento/sondagem/EmpresaSondagem/EmpresaSondagem';
import FuncaoSondagem from './Desenvolvimento/sondagem/FuncaoSondagem/FuncaoSondage';
import StatusFuroSondagem from './Desenvolvimento/sondagem/StatusFuroSondagem/StatusFuroSondagem';
import StatusTurnoSondagem from './Desenvolvimento/sondagem/StatusTurnoSondagem/StatusTurnoSondagem';
import AlmoxarifadoSondagem from './Desenvolvimento/sondagem/AlmoxarifadoSondagem/AlmoxarifadoSondagem';
import NovoBoletimCadastroSondagem from './Desenvolvimento/sondagem/NovoBoletimCadastroSondagem';
import NewBoletimCadastroSondagem from './Desenvolvimento/sondagem/NewBoletimCadastroSondagem';
import ManobraBoletimCadastroSondagem from './Desenvolvimento/sondagem/ManobraBoletimcadastroSondagem';
import AtividadesBoletimSondagem from './Desenvolvimento/sondagem/AtividadesBoletimSondagem';
import NewAtivisdadeBoletimCadastroSondagem from './Desenvolvimento/sondagem/NewAtividadeBoletimCadastroSondagem';
import InsumoBoletimCadastroSondagem from './Desenvolvimento/sondagem/InsumoBoletimCadastroSondagem';
import EquipeBoletimCadastroSondagem from './Desenvolvimento/sondagem/EquipeBoletimCadastroSondagem';
import InfiltracaoSoloSondagem from './Desenvolvimento/sondagem/Ensaios/InfiltracaoSoloSondagem';
import TelaEnsaios from './Desenvolvimento/sondagem/Ensaios/TelaEnsaios';
import Lugeon from './Desenvolvimento/sondagem/Ensaios/Lugeon';
import TrasnsporteAmostra from './Desenvolvimento/sondagem/Ensaios/TrasnsporteAmostras';
import Indeformada from './Desenvolvimento/sondagem/Ensaios/Indeformada';
import IndeformadaTubo from './Desenvolvimento/sondagem/Ensaios/IndeformadaTubo';
import Deformada from './Desenvolvimento/sondagem/Ensaios/Deformada';
import Piezometro from './Desenvolvimento/sondagem/Ensaios/Piezometro';
import Ina from './Desenvolvimento/sondagem/Ensaios/EnsaioINA';








import DiametroPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/DiametroPesquisaMineral/DiametroPesquisaMineral';
import TelaChamado from './Desenvolvimento/Telas/Manutencao/TelaChamado';
import LitologiaPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/LitologiaPesquisaMineral/LitologiaPesquisaMineral';
import MaterialPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/MaterialPesquisaMineral/MaterialPesquisaMineral';
import AtividadePesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/AtividadesPesquisaMineral/AtividadePesquisaMineral';
import EmpresaPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/EmpresaPesquisaMineral/EmpresaPesquisaMineral';
import FuncaoPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/FuncaoPesquisaMineral/FuncaoPesquisaMineral';
import FuroPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/FuroPesquisaMineral/FuroPesquisaMineral';
import StatusTurnoPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/StatusTurnoPesquisaMineral copy/StatusTurnoPesquisaMineral';
import BoletimPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/BoletimSondagemPesquisaMineral/BoletimSondagemPesquisa';
import BoletimCadastroPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/BoletimSondagemPesquisaMineral/BoletimCadastorPesquisaMineral';
import NewBoletimCadastroPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/BoletimSondagemPesquisaMineral/NewBoletimCadastorPesquisaMineral';
import AtividadesBoletimPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/BoletimSondagemPesquisaMineral/AtividadesBoletimSondagemPesquisa';
import ManobraBoletimCadastorPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/BoletimSondagemPesquisaMineral/ManobraBoletimCadastorPesquisaMineral';
import NewAtivisdadeBoletimCadastorPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/BoletimSondagemPesquisaMineral/NewAtivisdadeBoletimCadastorPesquisaMineral';
import InsumoBoletimCadastorPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/BoletimSondagemPesquisaMineral/InsumoBoletimCadastorPesquisaMineral';
import EquipeBoletimCadastorPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/BoletimSondagemPesquisaMineral/EquipeBoletimCadastorPesquisaMineral';
import AlmoxarifadoBoletimCadastorPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/Almoxarifado/AlmoxarifadoBoletimCadastorPesquisaMineral';
import NovoBoletimCadastroPesquisaMineral from './Desenvolvimento/Boletim Diario de Sondagem/BoletimSondagemPesquisaMineral/NovoBoletimCadastorPesquisaMineral';
import StatusFuro from './Desenvolvimento/Boletim Diario de Sondagem/BoletimSondagemPesquisaMineral/StatusFuro';
import TelaInitSSMT from './Desenvolvimento/Telas/SESMT/TelaInitSSMT';
import TelaIniEpi from './Desenvolvimento/Telas/SESMT/FichaEpi/TelaInitEpi';
import { SignatureScreen } from './Desenvolvimento/Boletim Diario de Sondagem/Assinatura/Assinatura';
import { AssinaturaAmostragem } from './Desenvolvimento/Boletim Diario de Sondagem/Assinatura/AssinaturaAmostragem';
import ChecklistPipa from './Desenvolvimento/Telas/SESMT/CheckLists/ChecklistPipa/CheckPipa';
export default function App() {

   const Stack = createStackNavigator();
   return (
      <NavigationContainer>
         <Stack.Navigator>

   
            {/* <Stack.Screen name='Lugeon' component={Lugeon} options={{ headerMode: 'screen', title: 'Lugeon ', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} /> */}

            {/* <Stack.Screen name='Piezometro' component={Piezometro} options={{ headerMode: 'screen', title: 'PIEZÔMETRO', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} /> */}




            {/* <Stack.Screen name='LOGIN' component={Login} options={{ headerMode: 'LOGIN', title: 'LOGIN', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />   */}
            <Stack.Screen name='Home' component={Home} options={{ headerMode: 'Tela Home', title: 'Tela Home', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='TelaInicialLaboratorio' component={TelaInicialLaboratorio} options={{ headerMode: 'Tela Home Laboratorio', title: 'Tela Home Laboratorio', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='Programacao' component={Programacao} options={{ headerMode: 'Programacao', title: 'Programação', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='TeorAgua' component={TeorAgua} options={{ headerMode: 'Teor Agua', title: 'Teor Agua', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='Compactacao' component={Compactacao} options={{ headerMode: 'Compactacao', title: 'Compactacao', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='FrascoAreia' component={FrascoAreia} options={{ headerMode: 'Frasco de Areia', title: 'Frasco de Areia', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='Hilf' component={Hilf} options={{ headerMode: 'Hilf', title: 'Hilf', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='Peneiramento' component={Peneiramento} options={{ headerMode: 'Peneiramento', title: 'Peneiramento', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='Seriepeneira' component={Seriepeneira} options={{ headerMode: 'Series de peneiras', title: 'Serie de peneiras', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='MassaEspecificaGraos' component={MassaEspecificaGraos} options={{ headerMode: 'Massa Especifica dos Graos', title: 'Massa Especifica dos Graos', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='Peneiramentosedimentacao' component={Peneiramentosedimentacao} options={{ headerMode: 'Peneiramento por sedimentacao', title: 'Peneiramento por sedimentacao', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='IndiceSuporteCalifornia' component={IndiceSuporteCalifornia} options={{ headerMode: 'Indice Suporte California', title: 'Indice Suporte California', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='CBRExpansao' component={CBRExpansao} options={{ headerMode: 'CBR Expansao', title: 'CBR Expansao', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='CBRPenetracao' component={CBRPenetracao} options={{ headerMode: 'CBR Penetracao', title: 'CBR Penetracao', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='LimitesLiquidezPlasticidade' component={LimitesLiquidezPlasticidade} options={{ headerMode: 'Limites Liquidez Plasticidade', title: 'Limites Liquidez Plasticidade', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='PermeabilidadeConstante' component={PermeabilidadeConstante} options={{ headerMode: 'Permeabilidade Carga Constante', title: 'Permeabilidade Carga Constante', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='PermeabilidadeVariavel' component={PermeabilidadeVariavel} options={{ headerMode: 'Permeabilidade Carga Variavel', title: 'Permeabilidade Carga Variavel', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='MassaAparenteLonaPlastica' component={MassaAparenteLonaPlastica} options={{ headerMode: 'Massa Aparente Lona Plastica', title: 'Massa Aparente Lona Plastica', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='Controle de Lama' component={ControleLama} options={{ headerMode: 'screen', title: 'CONTROLE DE LAMA', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='CilindroCravacao' component={CilindroCravacao} options={{ headerMode: 'Cilindro de Cravacao', title: 'Cilindro de Cravacao', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='DeterminacaoMassaEspecificaAparente' component={DeterminacaoMassaEspecificaAparente} options={{ headerMode: 'Determinacao Massa Especifica Aparente', title: 'Determinacao Massa Especifica Aparente', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='MassaEspecificaMaximaMinimaAreia' component={MassaEspecificaMaximaMinimaAreia} options={{ headerMode: 'Massa Especifica Maxima Minima Areia', title: 'Massa Especifica Maxima Minima Areia', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='TelaPesquisaMineral' component={TelaPesquisaMineral} options={{ headerMode: 'screen', title: 'Pesquisa Mineral', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />

            <Stack.Screen name='Telamanutencao' component={TelaManutencao} options={{ headerMode: 'screen', title: 'Manutenção', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />

            <Stack.Screen name='Manutencao Pesquisa OS' component={ManutencaoPesquisaOS} options={{ headerMode: 'screen', title: 'Manutençao', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='Manutencao' component={Manutencao} options={{ headerMode: 'screen', title: 'Manutenção', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='Tela de Chamado' component={TelaChamado} options={{ headerMode: 'screen', title: 'Ordem de Serviço de Manutenção', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='Tela OS' component={TelaOS} options={{ headerMode: 'screen', title: 'Ordem de Serviço de Manutenção', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />





            {/* SONDAGEM */}
            <Stack.Screen name='FuroSondagem' component={FuroSondagem} options={{ headerMode: 'screen', title: 'Furo1', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='TelaSondagem' component={TelaSondagem} options={{ headerMode: 'screen', title: 'Sondagem', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='CadastroFuroSondagem' component={CadastroFuroSondagem} options={{ headerMode: 'screen', title: 'Novo Furo', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='CadastroPesquisaSondagem' component={CadastroPesquisaSondagem} options={{ headerMode: 'screen', title: 'Cadastro Sondagem', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='SondaSondagem' component={SondaSondagem} options={{ headerMode: 'screen', title: 'Sonda ok', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='TurnoSondagem' component={TurnoSondagem} options={{ headerMode: 'screen', title: 'Turno ok', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='DiametroSondagem' component={DiametroSondagem} options={{ headerMode: 'screen', title: 'Diametro ok', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='LitologiaSondagem' component={LitologiaSondagem} options={{ headerMode: 'screen', title: 'Litologia ok', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='MaterialSondagem' component={MaterialSondagem} options={{ headerMode: 'screen', title: 'Material ok', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='AtividadeSondagem' component={AtividadeSondagem} options={{ headerMode: 'screen', title: 'Atividade ok', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='EmpresaSondagem' component={EmpresaSondagem} options={{ headerMode: 'screen', title: 'Empresa ok', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='FuncaoSondagem' component={FuncaoSondagem} options={{ headerMode: 'screen', title: 'Função ok', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='StatusFuroSondagem' component={StatusFuroSondagem} options={{ headerMode: 'screen', title: 'Status Furo ok', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='StatusTurnoSondagem' component={StatusTurnoSondagem} options={{ headerMode: 'screen', title: 'Status Turno ok', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='AlmoxarifadoSondagem' component={AlmoxarifadoSondagem} options={{ headerMode: 'screen', title: 'Almoxarifado ok', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='NovoBoletimCadastroSondagem' component={NovoBoletimCadastroSondagem} options={{ headerMode: 'screen', title: 'Novo Boletim ', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />

            <Stack.Screen name='NewBoletimCadastroSondagem' component={NewBoletimCadastroSondagem} options={{ headerMode: 'screen', title: 'Boletim de Sondagem', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='ManobraBoletimCadastroSondagem' component={ManobraBoletimCadastroSondagem} options={{ headerMode: 'screen', title: 'Manobra', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='AtividadesBoletimSondagem' component={AtividadesBoletimSondagem} options={{ headerMode: 'screen', title: 'Atividades do Boletim de Sondagem', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='NewAtivisdadeBoletimCadastroSondagem' component={NewAtivisdadeBoletimCadastroSondagem} options={{ headerMode: 'screen', title: 'Nova Atividade', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='InsumoBoletimCadastroSondagem' component={InsumoBoletimCadastroSondagem} options={{ headerMode: 'screen', title: 'Novos Insumos', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='EquipeBoletimCadastroSondagem' component={EquipeBoletimCadastroSondagem} options={{ headerMode: 'screen', title: 'Nova Equipe', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='InfiltracaoSoloSondagem' component={InfiltracaoSoloSondagem} options={{ headerMode: 'screen', title: 'LEFRAN ', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />


            <Stack.Screen name='Lugeon' component={Lugeon} options={{ headerMode: 'screen', title: 'Lugeon ', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='TrasnsporteAmostra' component={TrasnsporteAmostra} options={{ headerMode: 'screen', title: 'Controle de transporte de amostras  ', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='Indeformada' component={Indeformada} options={{ headerMode: 'screen', title: ' Indeformada  ', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='TelaEnsaios' component={TelaEnsaios} options={{ headerMode: 'screen', title: 'Ensaios ', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='IndeformadaTubo' component={IndeformadaTubo} options={{ headerMode: 'screen', title: ' Indeformada (Tubo)  ', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='Deformada' component={Deformada} options={{ headerMode: 'screen', title: 'Amostra de Trato - Deformada  ', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            {/* <Stack.Screen name='Piezometro' component={Piezometro} options={{ headerMode: 'screen', title: 'Piezometro  ', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} /> */}
            <Stack.Screen name='INA' component={Ina} options={{ headerMode: 'screen', title: 'INA ', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />

            {/* LABORATORIO */}
            <Stack.Screen name='BOLETIM DIÁRIO DE SONDAGEM' component={Teste} options={{ headerMode: 'screen', title: 'Boletim diário de sondagem', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='NUMERO DO FURO' component={HomeScreen} options={{ headerMode: 'screen', title: 'Boletim Diario de Sondagem', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='APROPRIAÇÃO' component={NewTAskApropriacao} options={{ headerMode: 'screen', title: 'CONTROLE DE CONSUMIVEL', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />

            <Stack.Screen name='Controle de Consumivel' component={ControleConsumivel} options={{ headerMode: 'screen', title: 'CONTROLE DE CONSUMIVEL', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='Cadastro da pesquisa' component={CadastroPesquisa} options={{ headerMode: 'screen', title: 'Cadastro', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='Edite Index' component={EditIndex} options={{ headerMode: 'screen', title: 'Boletim Diario de Sondagem', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='SondaPesquisaMineral' component={SondagemPesquisaMineral} options={{ headerMode: 'screen', title: 'Sonda', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='TurnoPesquisaMineral' component={TurnoPesquisaMineral} options={{ headerMode: 'screen', title: 'Turno', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='DiametroPesquisaMineral' component={DiametroPesquisaMineral} options={{ headerMode: 'screen', title: 'Diâmetro', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='LitologiaPesquisaMineral' component={LitologiaPesquisaMineral} options={{ headerMode: 'screen', title: 'Litologia', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='MaterialPesquisaMineral' component={MaterialPesquisaMineral} options={{ headerMode: 'screen', title: 'Material / Insumo', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='AtividadePesquisaMineral' component={AtividadePesquisaMineral} options={{ headerMode: 'screen', title: 'Atividade', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='EmpresaPesquisaMineral' component={EmpresaPesquisaMineral} options={{ headerMode: 'screen', title: 'Empresa', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='FuncaoPesquisaMineral' component={FuncaoPesquisaMineral} options={{ headerMode: 'screen', title: 'Função', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='FuroPesquisaMineral' component={FuroPesquisaMineral} options={{ headerMode: 'screen', title: 'Status Furo', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='StatusTurnoPesquisaMineral' component={StatusTurnoPesquisaMineral} options={{ headerMode: 'screen', title: 'Status Turno', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='BoletimPesquisaMineral' component={BoletimPesquisaMineral} options={{ headerMode: 'screen', title: 'Furo', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='BoletimCadastroPesquisaMineral' component={BoletimCadastroPesquisaMineral} options={{ headerMode: 'screen', title: 'Novo Furo', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='NewBoletimCadastroPesquisaMineral' component={NewBoletimCadastroPesquisaMineral} options={{ headerMode: 'screen', title: 'Novo Boletim', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='AtividadesBoletimPesquisaMineral' component={AtividadesBoletimPesquisaMineral} options={{ headerMode: 'screen', title: 'Atividades do Boletim de Sondagem', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='ManobraBoletimCadastorPesquisaMineral' component={ManobraBoletimCadastorPesquisaMineral} options={{ headerMode: 'screen', title: 'Manobra', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='NewAtivisdadeBoletimCadastorPesquisaMineral' component={NewAtivisdadeBoletimCadastorPesquisaMineral} options={{ headerMode: 'screen', title: 'Nova Atividade', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='InsumoBoletimCadastorPesquisaMineral' component={InsumoBoletimCadastorPesquisaMineral} options={{ headerMode: 'screen', title: 'Novos Insumos', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='EquipeBoletimCadastorPesquisaMineral' component={EquipeBoletimCadastorPesquisaMineral} options={{ headerMode: 'screen', title: 'Novas Equipe', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='AlmoxarifadoBoletimCadastorPesquisaMineral' component={AlmoxarifadoBoletimCadastorPesquisaMineral} options={{ headerMode: 'screen', title: 'Almoxarifado', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='NovoBoletimCadastroPesquisaMineral' component={NovoBoletimCadastroPesquisaMineral} options={{ headerMode: 'screen', title: 'Boletim de Sondagem', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='StatusFuro' component={StatusFuro} options={{ headerMode: 'screen', title: 'Status  do Furo', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            {/* <Stack.Screen name='Assinatura' component={SignatureScreen} options={{ headerMode: 'screen', title: 'Assinatura', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} /> */}
            <Stack.Screen name='AssinaturaAmostragem' component={AssinaturaAmostragem} options={{ headerMode: 'screen', title: 'Assinatura ', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />

            {/* SSMT */}
            <Stack.Screen name='TelaInitSSMT' component={TelaInitSSMT} options={{ headerMode: 'screen', title: 'SSMT', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='TelaEpi' component={TelaIniEpi} options={{ headerMode: 'screen', title: 'EPI', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
            <Stack.Screen name='CheckPipa' component={ChecklistPipa} options={{ headerMode: 'screen', title: 'Check Liste Caminhão Pipa', headerTintColor: 'white', headerStyle: { backgroundColor: '#00CD66' } }} />
         </Stack.Navigator>
      </NavigationContainer>

   );

}
//MassaEspecificaMaximaMinimaAreia