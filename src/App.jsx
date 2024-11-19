import { Input, Button, Card, Typography, Alert, Space } from "antd";
import axios from "axios";
import { useState } from "react";

const { Title, Text } = Typography;

export default function App() {
  const [cep, setCep] = useState("");
  const [cepData, setCepData] = useState(null);
  const [error, setError] = useState("");

  const fetchCepData = async () => {
    try {
      setError("");
      setCepData(null);
      const response = await axios.get(
        `https://brasilapi.com.br/api/cep/v2/${cep}`
      );
      setCepData(response.data);
    } catch (err) {
      setError("CEP não encontrado ou inválido.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f2f5",
        padding: "20px",
      }}
    >
      <Card style={{ maxWidth: 400, width: "100%" }} bordered>
        <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>
          Busca de CEP
        </Title>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Input
            placeholder="Digite o CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            maxLength={8}
          />
          <Button type="primary" block onClick={fetchCepData}>
            Buscar
          </Button>
        </Space>
        {error && (
          <Alert
            message="Erro"
            description={error}
            type="error"
            showIcon
            style={{ marginTop: 20 }}
          />
        )}
        {cepData && (
          <Card
            style={{ marginTop: 20, backgroundColor: "#fafafa" }}
            bordered={false}
          >
            <Text>
              <strong>CEP:</strong> {cepData.cep}
            </Text>
            <br />
            <Text>
              <strong>Rua:</strong> {cepData.street || "Não disponível"}
            </Text>
            <br />
            <Text>
              <strong>Bairro:</strong>{" "}
              {cepData.neighborhood || "Não disponível"}
            </Text>
            <br />
            <Text>
              <strong>Cidade:</strong> {cepData.city}
            </Text>
            <br />
            <Text>
              <strong>Estado:</strong> {cepData.state}
            </Text>
          </Card>
        )}
      </Card>
    </div>
  );
}
