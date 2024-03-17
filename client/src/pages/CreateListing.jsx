import { useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function CreateListing() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [files, setfiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
    name: "",
    description: "",
    address: "",
    type: "rent",
    type_property: "casa",
    bedrooms: 0,
    bathrooms: 0,
    regularPrice: 50,
    discountedPrice: 0,
    offer: false,
    parking: false,
    furnished: false,
    pool: false,
    mts_cubiertos: 0,
    mts_totales: 0,
    ambientes: 0,
    cochera:false
  });

  const [imageUploadError, setImageUplodError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(formData);

  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
      setUploading(true);
      setImageUplodError(false);
      const promises = [];
      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUplodError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUplodError(
            "Error al cargar la imagen (2 megabytes máximo por imagen)"
          );
          setUploading(false);
        });
    } else {
      setImageUplodError("Error al cargar la imagen (Máximo 6 imágenes)");
      setUploading(false);
    }
  };
  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Subiendo Imágenes: ${progress}% hecho.`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  const handleChange = (e) => {
    if (e.target.id == "sale" || e.target.id == "rent" || e.target.id == "season") {
      setFormData({
        ...formData,
        type: e.target.id,
      });
    }

    if (
      e.target.id === "terreno" ||
      e.target.id === "galpon" ||
      e.target.id === "casa" ||
      e.target.id === "dpto" ||
      e.target.id === "local"
    ) {
      setFormData({
        ...formData,
        type_property: e.target.id,
      });
    }

    if (
      e.target.id === "parking" ||
      e.target.id === "cochera" ||
      e.target.id === "furnished" ||
      e.target.id === "offer" ||
      e.target.id === "pool"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
    }

    if (
      e.target.type === "number" ||
      e.target.type === "text" ||
      e.target.type === "textarea"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }

    if (
      e.target.type_property === "number" ||
      e.target.type === "text" ||
      e.target.type_property === "textarea"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.imageUrls.length < 1)
        return setError("Debe seleccionar al menos una imagen");
      if (+formData.regularPrice < +formData.discountedPrice)
        return setError("El precio regular debe ser mayor que el descuentado");
      setLoading(true);
      setError(false);
      const res = await fetch("/api/listing/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      navigate(`/listing/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Crear un Anuncio
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Nombre"
            className="border p-3 rounded-lg"
            id="name"
            maxLength="62"
            minLength="10"
            required
            onChange={handleChange}
            value={formData.name}
          />
          <textarea
            type="text"
            placeholder="Descripción"
            className="border p-3 rounded-lg"
            id="description"
            required
            onChange={handleChange}
            value={formData.description}
          />
          <input
            type="text"
            placeholder="Dirección"
            className="border p-3 rounded-lg"
            id="address"
            required
            onChange={handleChange}
            value={formData.address}
          />
          <div className="border-slate-900 w-full solid 2px text-2xl font-semibold">Tipo de contrato</div>
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="sale"
                className="w-5"
                onChange={handleChange}
                checked={formData.type === "sale"}
              />

              <span>Venta</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="rent"
                className="w-5"
                onChange={handleChange}
                checked={formData.type === "rent"}
              />
              <span>Alquiler</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="season"
                className="w-5"
                onChange={handleChange}
                checked={formData.type === "season"}
              />
              <span>Alquiler por temporada</span>
    
  
            </div>
            <div className="border-slate-900 w-full solid 2px text-2xl font-semibold">Tipo de propiedad</div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="galpon"
                className="w-5"
                onChange={handleChange}
                checked={formData.type_property === "galpon"}
              />
              
              <span>Galpón</span>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                id="terreno"
                className="w-5"
                onChange={handleChange}
                checked={formData.type_property === "terreno"}
              />
              <span>Terreno</span>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                id="casa"
                className="w-5"
                onChange={handleChange}
                checked={formData.type_property === "casa"}
              />
              <span>Casa</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="local"
                className="w-5"
                onChange={handleChange}
                checked={formData.type_property === "local"}
              />
              <span>Local</span>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                id="dpto"
                className="w-5"
                onChange={handleChange}
                checked={formData.type_property === "dpto"}
              />
              <span>Departamento</span>
            </div>
            <div className="border-slate-900 w-full solid 2px text-2xl font-semibold">Otras características</div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="parking"
                className="w-5"
                onChange={handleChange}
                checked={formData.parking}
              />
              <span>Garaje</span>
            </div>



            <div className="flex gap-2">
              <input
                type="checkbox"
                id="cochera"
                className="w-5"
                onChange={handleChange}
                checked={formData.cochera}
              />
              <span>Cochera</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="furnished"
                className="w-5"
                onChange={handleChange}
                checked={formData.furnished}
              />
              <span>Amueblado</span>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                id="offer"
                className="w-5"
                onChange={handleChange}
                checked={formData.offer}
              />
              <span>Rebaja</span>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                id="pool"
                className="w-5"
                onChange={handleChange}
                checked={formData.pool}
              />
              <span>Pileta</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">

            
          <div className="flex items-center gap-2">
              <input
                type="number"
                id="ambientes"
                min="0"
                max="10"
               
                className="p-3 border border-gray-300 rounded-lg"
                onChange={handleChange}
                value={formData.ambientes}
              />
              <p>Ambientes</p>
            </div>



            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bedrooms"
                min="0"
                max="10"
               
                className="p-3 border border-gray-300 rounded-lg"
                onChange={handleChange}
                value={formData.bedrooms}
              />
              <p>Habitaciones</p>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bathrooms"
                min="0"
                max="10"
               
                className="p-3 border border-gray-300 rounded-lg"
                onChange={handleChange}
                value={formData.bathrooms}
              />
              <p>Baños</p>
            </div>
            <div className="border-slate-900 w-full solid 2px text-2xl font-semibold">Precios</div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="regularPrice"
                min="50"
                max="1000000000000"
                required
                className="p-3 border border-gray-300 rounded-lg"
                onChange={handleChange}
                value={formData.regularPrice}
              />
              <div className="flex flex-col items-center">
                <p>Precio Regular</p>
                <span className="text-xs">($ / Mes)</span>
              </div>
            </div>

            {formData.offer && (
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="discountedPrice"
                  min="0"
                  max="1000000000"
                  required
                  className="p-3 border border-gray-300 rounded-lg"
                  onChange={handleChange}
                  value={formData.discountedPrice}
                />
                <div className="flex flex-col items-center">
                  <p>Precio Descontado</p>
                  <span className="text-xs">($ / Mes)</span>
                </div>
              </div>
            )}

            <div className="flex items-center gap-2">
              <input
                type="number"
                id="mts_totales"
                min="0"
                max="1000000000"
                required
                className="p-3 border border-gray-300 rounded-lg"
                onChange={handleChange}
                value={formData.mts_totales}
              />
              <div className="flex flex-col items-center">
                <p>Metros Totales: </p>
                <span className="text-xs">
                  (Metros totales de la propiedad)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="number"
                id="mts_cubiertos"
                min="0"
                max="1000000000"
                required
                className="p-3 border border-gray-300 rounded-lg"
                onChange={handleChange}
                value={formData.mts_cubiertos}
              />
              <div className="flex flex-col items-center">
                <p>Metros Cubiertos: </p>
                <span className="text-xs">
                  (Metros totales cubiertos de la propiedad)
                </span>
              </div>
            </div>




          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Imágenes:
            <span className="font-normal text-gray-600 ml-2">
              la primer imagen será utilizada de portada (máximo 6)
            </span>
          </p>

          <div className="flex gap-4">
            <input
              onChange={(e) => setfiles(e.target.files)}
              type="file"
              id="images"
              accept="image/*"
              multiple
              className="p-3 border border-gray-300 rounded w-full"
            />
            <button
              type="button"
              disabled={uploading}
              onClick={handleImageSubmit}
              className="p-3 text-green-700 border border-green-700  rounded uppercase hover:shadow-lg dissabled:opacity-80"
            >
              {uploading ? "Subiendo..." : "Subir Imagen"}
            </button>
          </div>
          <p className="text-red-700 text-sm">
            {imageUploadError && imageUploadError}
          </p>
          {formData.imageUrls.length > 0 &&
            formData.imageUrls.map((url, index) => (
              <div
                key={url}
                className="flex justify-between p-3 border items-center"
              >
                <img
                  src={url}
                  alt="listing image"
                  className="w-20 h-20 object-contain rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="p-3 text-red-700 rounded-lg uppercase hover:opacity-75"
                >
                  Eliminar
                </button>
              </div>
            ))}
          <button
            disabled={loading || uploading}
            className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            {loading ? "Cargando..." : "Crear Inmueble"}
          </button>
          {error && <p className="text-red-700 text-sm">{error}</p>}
        </div>
      </form>
    </main>
  );
}
