import { StyleSheet, Text, View } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Sobre</Text>

      <Text style={styles.texto}>
        O SENAI (Serviço Nacional de Aprendizagem Industrial) é a maior rede privada de educação profissional da América Latina,
        sendo referência na formação de profissionais para o setor industrial. Sua atuação é voltada para o desenvolvimento de
        competências técnicas, inovação e uso de tecnologias, acompanhando as mudanças constantes do mercado de trabalho.
      </Text>

      <Text style={styles.texto}>
        Fundado em 1942, o SENAI possui unidades em todo o Brasil, oferecendo cursos técnicos, superiores e de qualificação profissional. A instituição se destaca pelos altos índices de empregabilidade, formando profissionais preparados de acordo com as necessidades reais da indústria.
      </Text>

      <Text style={styles.texto}>
        Além disso, o SENAI investe em pesquisa, laboratórios modernos e parcerias com empresas, contribuindo para o avanço tecnológico e a competitividade da indústria brasileira. Sua atuação é essencial na preparação de profissionais para a Indústria 4.0 e para os desafios do futuro do trabalho.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  texto: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
});