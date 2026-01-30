"use client";

import { useEffect, useState } from "react";
// IMPORT FROM YOUR NEW FILE
import { db } from "../firebase/firebase"; 
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [companies, setCompanies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Fetching companies...");
        const querySnapshot = await getDocs(collection(db, "professionalProfiles"));
        
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setCompanies(data);
        setLoading(false);
      } catch (err: any) {
        console.error(err);
        setError(err.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div style={{padding: 40}}>Loading your professionals...</div>;

  if (error) return (
    <div style={{padding: 40, color: 'red'}}>
      <h2>Error Loading Data</h2>
      <p>{error}</p>
      <p><em>Check your console for details.</em></p>
    </div>
  );

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Gauteng Professionals ({companies.length})</h1>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
        {companies.map((company) => (
          <div key={company.id} style={{ border: "1px solid #ddd", borderRadius: 8, padding: 20, background: "white", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <h2 style={{ margin: "0 0 10px 0", fontSize: "1.2rem" }}>
              {company.companyName || company.name || "Unnamed Company"}
            </h2>
            
            <div style={{ marginBottom: 10, color: "#666" }}>
              📍 {company.city || company.City || "Unknown City"}
            </div>

            <p style={{ fontSize: "0.9rem", lineHeight: 1.5 }}>
              {company.description || company.Description}
            </p>
            
            <div style={{ marginTop: 15 }}>
              <strong>Services:</strong><br/>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 5 }}>
                {/* Handle services whether they are arrays or strings */}
                {Array.isArray(company.services || company.Services) 
                  ? (company.services || company.Services).map((s: string, i: number) => (
                      <span key={i} style={{ background: "#eee", padding: "2px 8px", borderRadius: 4, fontSize: "0.8rem" }}>{s}</span>
                    ))
                  : <span style={{ background: "#eee", padding: "2px 8px", borderRadius: 4, fontSize: "0.8rem" }}>{company.services || company.Services}</span>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
