import { Input, Button, Card, Typography, Alert, Space } from "antd";
import axios from "axios";
import { useState } from "react";

const { Title, Text } = Typography;

// Definindo nova paleta de cores
const colors = {
  primary: "#4361EE",
  secondary: "#3F37C9",
  accent: "#4CC9F0",
  background: "#F8F9FA",
  cardBg: "#FFFFFF",
  resultBg: "#E9ECEF",
  text: "#212529",
  lightText: "#6C757D",
  success: "#38B000",
  error: "#D90429",
};

export default function App() {
  const [cep, setCep] = useState("");
  const [cepData, setCepData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCepData = async () => {
    if (!cep || cep.length !== 8) {
      setError("Por favor, digite um CEP válido com 8 dígitos.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setCepData(null);
      const response = await axios.get(
        `https://brasilapi.com.br/api/cep/v2/${cep}`
      );
      setCepData(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
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
        backgroundColor: colors.background,
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Card 
        style={{ 
          maxWidth: 450, 
          width: "100%", 
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(149, 157, 165, 0.2)",
          border: "none",
        }} 
      >
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <Title 
            level={3} 
            style={{ 
              color: colors.primary, 
              fontWeight: 600,
              marginBottom: 5
            }}
          >
            Busca de CEP
          </Title>
          <Text style={{ color: colors.lightText }}>
            Digite o CEP para encontrar o endereço
          </Text>
        </div>

        <Space direction="vertical" style={{ width: "100%" }}>
          <Input
            placeholder="Digite o CEP (somente números)"
            value={cep}
            onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
            maxLength={8}
            style={{ 
              height: "46px", 
              borderRadius: "8px",
              fontSize: "16px"
            }}
            onPressEnter={fetchCepData}
          />
          <Button 
            type="primary" 
            block 
            onClick={fetchCepData}
            loading={loading}
            style={{ 
              height: "46px", 
              borderRadius: "8px",
              backgroundColor: colors.primary,
              borderColor: colors.primary,
              fontWeight: 600,
              fontSize: "16px"
            }}
          >
            Buscar Endereço
          </Button>
        </Space>

        {error && (
          <Alert
            message="Erro na busca"
            description={error}
            type="error"
            showIcon
            style={{ 
              marginTop: 24, 
              borderRadius: "8px",
              border: `1px solid ${colors.error}`,
            }}
          />
        )}

        {cepData && (
          <Card
            style={{ 
              marginTop: 24, 
              backgroundColor: colors.resultBg,
              borderRadius: "8px",
              border: "none",
            }}
          >
            <Title level={5} style={{ color: colors.primary, marginBottom: 16 }}>
              Endereço encontrado
            </Title>
            
            <div style={{ display: "grid", gap: "12px" }}>
              <div>
                <Text style={{ color: colors.lightText, fontSize: "14px" }}>CEP</Text>
                <div style={{ fontWeight: 600, color: colors.text }}>
                  {cepData.cep.replace(/(\d{5})(\d{3})/, "$1-$2")}
                </div>
              </div>
              
              <div>
                <Text style={{ color: colors.lightText, fontSize: "14px" }}>Logradouro</Text>
                <div style={{ fontWeight: 600, color: colors.text }}>
                  {cepData.street || "Não disponível"}
                </div>
              </div>
              
              <div>
                <Text style={{ color: colors.lightText, fontSize: "14px" }}>Bairro</Text>
                <div style={{ fontWeight: 600, color: colors.text }}>
                  {cepData.neighborhood || "Não disponível"}
                </div>
              </div>
              
              <div>
                <Text style={{ color: colors.lightText, fontSize: "14px" }}>Cidade</Text>
                <div style={{ fontWeight: 600, color: colors.text }}>
                  {cepData.city}
                </div>
              </div>
              
              <div>
                <Text style={{ color: colors.lightText, fontSize: "14px" }}>Estado</Text>
                <div style={{ fontWeight: 600, color: colors.text }}>
                  {cepData.state}
                </div>
              </div>
            </div>
          </Card>
        )}
      </Card>
    </div>
  );
}