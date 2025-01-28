
// import React, { useState ,useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import 'bs5-lightbox';
// import Swal from 'sweetalert2'
// import '../CSS/gallerystyle.css';
// import nextArrow from '../assets/next.png';
// import previousArrow from '../assets/back.png';
// import logo from '../assets/logo.png';
// import tick from '../assets/checkbox2.png';
// import download from '../assets/download.png'
// import SelectedPhotos from '../Components/SelectedPhotos.jsx'

// import Navigationevents from './Navigationevents.jsx';
// function Gallery() {
//     const [images, setImages] = useState([]);
   
// const [loading,setLoading]=useState(true)
//     const [currentIndex, setCurrentIndex] = useState(null);
//     const [selected, setSelected] = useState({});
//     const [openedImage, setOpenedImage] = useState(null);
//     const [selectedOption, setSelectedOption] = useState("allphotos");
//     // const [errormessage, setErrormessage] = useState("")
//     const [imageLoaded, setImageLoaded] = useState({});

//     useEffect(() => {
//         const fetchImages = async () => {
//             try {
//                 const response = await fetch('/imageData.json');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch image data');
//                 }
//                 const data = await response.json();
//                 setImages(data);
//             } catch (error) {
//                 console.error("Error fetching image data:", error);
//             } finally {
//                 setLoading(false); 
//             }
//         };

//         fetchImages();
//     }, []);
//     const handleSelection = (option) => {
//         setSelectedOption(option);
//     };
 
//     const handleselected = (index) => {
//         const selectedphotosCount = Object.values(selected).filter((isSelected) => isSelected).length;
//         if (selectedphotosCount >= 10 && !selected[index]) {
//             // setErrormessage("you can select maximum of 10 photos !")
//             Swal.fire({
//                 icon: "info",
//                 title: "Limit reached...",
//                 text: "you can only select upto 10 photos !",
//               });
//             return;
//         }
//         // setErrormessage('')
//         setSelected((prevSelected) => ({
//             ...prevSelected,
//             [index]: !prevSelected[index],
//         })
//         );
//     };

//     const selectedImages = images.filter((image) =>
//         selected[image.id]
//     )


//     const handleImage = (index) => {
//         setCurrentIndex(index);
//         setOpenedImage(images[index].src);
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//         setOpenedImage(images[(currentIndex + 1) % images.length].src);
//     };

//     const handlePrevious = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//         setOpenedImage(images[(currentIndex === 0 ? images.length - 1 : currentIndex - 1)].src);
//     };

//     const closeModal = () => {
//         setCurrentIndex(null);
//         setOpenedImage(null);
//     };
//     const handleDownload=()=>
//     {
//         const link = document.createElement('a');
//         link.href = openedImage;
//         link.download = `Image_${currentIndex + 1}.jpg`; 
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     }
   
//     const selectedphotosCount = Object.values(selected).filter((isSelected) => isSelected).length;
//     return (
//         <div className="maincontainer">
//             <div className="navbar">
//                 <img className="logostyle" src={logo} alt="" />
//             </div>
//             <div className="galleryContent">
//                 <h1>Steffy & Nobin</h1>
//                 <h3>Wedding Album</h3>
//             </div>
//             <Navigationevents/>
//             <div className="segmented-control">
//                 <button
//                     className={`segment ${selectedOption === "allphotos" ? "active" : ""}`}
//                     onClick={() => handleSelection("allphotos")}
//                 >
//                     All Photos({images.length})
//                 </button>
//                 <button
//                     className={`segment ${selectedOption === "selectedphotos" ? "active" : ""}`}
//                     onClick={() => handleSelection("selectedphotos")}
//                 >
//                     Selected Photos  ({selectedphotosCount})
//                 </button>

//             </div>
          
            
//             {loading ? (
   
//     <div className="loading">Loading images...</div>
// ) : selectedOption === "allphotos" ? (
   
//     <div>
//         <div className="masonry-container">
//             {images.map((image, index) => (
//                 <div key={image.id} className="masonry-item" style={{ position: 'relative' }}>
//                     {/* <img
                    
//                         src={image.src}
//                         alt={image.alt}
//                         className="img-fluid"
//                         onLoad={(e) => e.target.style.opacity = 1}
//         style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
//                         onClick={() => handleImage(index)}
//                     /> */}


//                   {/* lazy loading  */}
//                     <img
//                         src={image.src}
//                         alt={image.alt}
//                         className="img-fluid"
//                         onLoad={() =>
//                             setImageLoaded((prev) => ({ ...prev, [image.id]: true }))
//                         }
//                         style={{ opacity: imageLoaded[image.id] ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
//                         onClick={() => handleImage(index)}
//                     />
// {imageLoaded[image.id] && (
//                     <div
//                         className="checkbox-wrapper-18"
//                         style={{
//                             position: 'absolute',
//                             top: '10px',
//                             right: '10px',
//                             zIndex: 10,
//                         }}
//                     >
//                         <div className="round">
//                             <input
//                                 type="checkbox"
//                                 id={`checkbox-${image.id}`}
//                                 checked={selected[image.id] || false}
//                                 onChange={() => handleselected(image.id)}
//                             />
//                             <label htmlFor={`checkbox-${image.id}`}></label>
//                         </div>
//                     </div>
// )}
//                 </div>
//             ))}
//         </div>
//     </div>
// ) : (
//     <SelectedPhotos images={selectedImages} handleselected={handleselected} />
// )}

//             {openedImage && (
//                 <div className="modal" onClick={closeModal}>
//                     <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                     <button className="download-btn" onClick={handleDownload} >
//                <img src={download} alt="" />
//                         </button>
//                         <button className="close-btn" onClick={closeModal}>
//                             &times;
//                         </button>
//                         <button className="prev-btn" onClick={handlePrevious}>
//                             <img src={previousArrow} alt="Previous" />
//                         </button>

//                         <img src={openedImage} alt="Full Image" className="modal-image" />

//                         <button className="next-btn" onClick={handleNext}>
//                             <img src={nextArrow} alt="Next" />
//                         </button>

//                         <button
//                             className={`selecttick ${selected[images[currentIndex]?.id] ? 'selected' : ''}`}
//                             onClick={() => handleselected(images[currentIndex]?.id)}
//                         >
//                             <img src={tick} alt="Select" />
//                         </button> 
//                           {/* {errormessage && (
//                             <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
//                                 {errormessage}
//                             </div>
//                         )} */}

//                     </div>
                    
//                 </div>

//             )}

// {!openedImage && selectedphotosCount > 0 && (
//   <div className="senddiv">
//     <button
//       className="floating-button icon-send"
//       onClick={() => console.log("Images sent!", selectedImages)}
//     >
//       Send
    
//     </button>
//   </div>
// )}


//         </div>
//     );
// }


// export default Gallery;


                     
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bs5-lightbox';
// import Swal from 'sweetalert2';
// import '../CSS/gallerystyle.css';
// import nextArrow from '../assets/next.png';
// import previousArrow from '../assets/back.png';
// import logo from '../assets/logo.png';
// import tick from '../assets/checkbox2.png';
// import download from '../assets/download.png';
// import SelectedPhotos from '../Components/SelectedPhotos.jsx';
// import { NavLink, useNavigate } from 'react-router-dom';
// import '../CSS/naveventstyle.css';
// import Navigationevents from './Navigationevents.jsx';

// const BASE_URL = 'https://web.snoxpro.com/public/api/v1/gallery';

// function Gallery() {
//     const { event_uuid } = useParams();

//     const [images, setImages] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [currentIndex, setCurrentIndex] = useState(null);
//     const [selected, setSelected] = useState({});
//     const [openedImage, setOpenedImage] = useState(null);
//     const [selectedOption, setSelectedOption] = useState('allphotos');
//     const [imageLoaded, setImageLoaded] = useState({});
//     const [galleryTitle, setGalleryTitle] = useState('Gallery');
   
//     const [selectedGallery, setSelectedGallery] = useState(GALLERY_IDS.Haldi);

//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem('authToken');
//         if (!token) {
//             navigate('/');
//         } else {
//             fetchImages(selectedGallery);
//         }
//     }, [selectedGallery, navigate]);

//     const fetchImages = async (galleryId) => {
//         setLoading(true);
//         try {
//             const token = localStorage.getItem('authToken');
//             const response = await fetch(`${BASE_URL}/${galleryId}`, {
//                 method: 'GET',
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             const data = await response.json();
//             setGalleryTitle(data.event?.title || 'Gallery');

//             if (data && Array.isArray(data.galleries)) {
//                 const fetchedImages = data.galleries.map((gallery) => ({
//                     id: gallery.uuid,
//                     image_url: gallery.image,
//                 }));
//                 setImages(
//                     fetchedImages.map((image) => ({
//                         ...image,
//                         src: image.image_url,
//                     }))
//                 );
//             } else {
//                 console.error('Unexpected data structure:', data);
//                 setImages([]);
//             }
//         } catch (error) {
//             console.error('Error fetching image data:', error);
//             setImages([]);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleSendSelectedPhotos = async () => {
//         const selectedImagesData = images
//             .filter((image) => selected[image.id])
//             .map((image) => ({
//                 image_uuid: image.id,
//                 is_selected: true,
//             }));

//         const token = localStorage.getItem('authToken');
//         const event_uuid = selectedGallery;

//         try {
//             const response = await fetch(`${BASE_URL}//public/api/v1/selection/submit/${event_uuid}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${token}`,
//                 },
//                 body: JSON.stringify({
//                     event_uuid,
//                     selected_images: selectedImagesData,
//                 }),
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to send selected photos');
//             }

//             const result = await response.json();
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Photos sent successfully!',
//                 text: result.message || 'Your selected photos have been successfully sent.',
//             });
//         } catch (error) {
//             console.error('Error sending selected photos:', error);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error sending photos',
//                 text: 'There was an issue sending the selected photos. Please try again later.',
//             });
//         }
//     };

//     const handleselected = (index) => {
//         const selectedPhotosCount = Object.values(selected).filter((isSelected) => isSelected).length;
//         if (selectedPhotosCount >= 10 && !selected[index]) {
//             Swal.fire({
//                 icon: 'info',
//                 title: 'Limit reached...',
//                 text: 'You can only select up to 10 photos!',
//             });
//             return;
//         }

//         const updatedSelected = {
//             ...selected,
//             [index]: !selected[index],
//         };
//         setSelected(updatedSelected);
//     };

//     const handleImage = (index) => {
//         setCurrentIndex(index);
//         setOpenedImage(images[index].src);
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//         setOpenedImage(images[(currentIndex + 1) % images.length].src);
//     };

//     const handlePrevious = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//         setOpenedImage(images[(currentIndex === 0 ? images.length - 1 : currentIndex - 1)].src);
//     };

//     const closeModal = () => {
//         setCurrentIndex(null);
//         setOpenedImage(null);
//     };

//     const handleDownload = () => {
//         const link = document.createElement('a');
//         link.href = openedImage;
//         link.download = `Image_${currentIndex + 1}.jpg`;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     const selectedPhotosCount = Object.values(selected).filter((isSelected) => isSelected).length;

//     return (
//         <div className="maincontainer">
//             <div className="navbar">
//                 <img className="logostyle" src={logo} alt="" />
//             </div>
//             <div className="galleryContent">
//                 <h1>{galleryTitle}</h1>
//                 <h3>Wedding Album</h3>
//             </div>
//             <div className="albumnav">
//                 <NavLink to="#" className="albumnavlink" onClick={() => setSelectedGallery(GALLERY_IDS.Haldi)}>
//                     Haldi
//                 </NavLink>
//                 <NavLink to="#" className="albumnavlink" onClick={() => setSelectedGallery(GALLERY_IDS.Wedding)}>
//                     Wedding
//                 </NavLink>
//                 <NavLink to="#" className="albumnavlink" onClick={() => setSelectedGallery(GALLERY_IDS.Reception)}>
//                     Reception
//                 </NavLink>
//             </div>

//             <div className="segmented-control">
//                 <button
//                     className={`segment ${selectedOption === 'allphotos' ? 'active' : ''}`}
//                     onClick={() => setSelectedOption('allphotos')}
//                 >
//                     All Photos ({images.length})
//                 </button>
//                 <button
//                     className={`segment ${selectedOption === 'selectedphotos' ? 'active' : ''}`}
//                     onClick={() => setSelectedOption('selectedphotos')}
//                 >
//                     Selected Photos ({selectedPhotosCount})
//                 </button>
//             </div>

//             {loading ? (
//                 <div className="loading">Loading images...</div>
//             ) : selectedOption === 'allphotos' ? (
//                 <div>
//                     <div className="masonry-container">
//                         {images.map((image, index) => (
//                             <div key={image.id} className="masonry-item" style={{ position: 'relative' }}>
//                                 <img
//                                     src={image.src}
//                                     alt={image.alt}
//                                     className="img-fluid"
//                                     onLoad={() =>
//                                         setImageLoaded((prev) => ({ ...prev, [image.id]: true }))
//                                     }
//                                     style={{
//                                         opacity: imageLoaded[image.id] ? 1 : 0,
//                                         transition: 'opacity 0.3s ease-in-out',
//                                     }}
//                                     onClick={() => handleImage(index)}
//                                 />
//                                 {imageLoaded[image.id] && (
//                                     <div
//                                         className="checkbox-wrapper-18"
//                                         style={{
//                                             position: 'absolute',
//                                             top: '10px',
//                                             right: '10px',
//                                             zIndex: 10,
//                                         }}
//                                     >
//                                         <div className="round">
//                                             <input
//                                                 type="checkbox"
//                                                 id={`checkbox-${image.id}`}
//                                                 checked={selected[image.id] || false}
//                                                 onChange={() => handleselected(image.id)}
//                                             />
//                                             <label htmlFor={`checkbox-${image.id}`}></label>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ) : (
//                 <SelectedPhotos images={images.filter((image) => selected[image.id])} handleselected={handleselected} />
//             )}

//             {openedImage && (
//                 <div className="modal" onClick={closeModal}>
//                     <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                         <button className="download-btn" onClick={handleDownload}>
//                             <img src={download} alt="" />
//                         </button>
//                         <button className="close-btn" onClick={closeModal}>
//                             &times;
//                         </button>
//                         <button className="prev-btn" onClick={handlePrevious}>
//                             <img src={previousArrow} alt="Previous" />
//                         </button>
//                         <img src={openedImage} alt="Full Image" className="modal-image" />
//                         <button className="next-btn" onClick={handleNext}>
//                             <img src={nextArrow} alt="Next" />
//                         </button>
//                         <button
//                             className={`selecttick ${selected[images[currentIndex]?.id] ? 'selected' : ''}`}
//                             onClick={() => handleselected(images[currentIndex]?.id)}
//                         >
//                             <img src={tick} alt="Select" />
//                         </button>
//                     </div>
//                 </div>
//             )}

//             {!openedImage && selectedPhotosCount > 0 && (
//                 <div className="senddiv">
//                     <button className="floating-button icon-send" onClick={handleSendSelectedPhotos}>
//                         Send
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Gallery;
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CSS/gallerystyle.css';
import '../CSS/naveventstyle.css';
import logo from '../assets/logo.png';
import nextArrow from '../assets/next.png';
import previousArrow from '../assets/back.png';
import tick from '../assets/checkbox2.png';
import download from '../assets/download.png';
import SelectedPhotos from '../Components/SelectedPhotos.jsx';

const BASE_URL = "https://web.snoxpro.com/public/api/v1/selection";
function Gallery() {
    const { event_uuid } = useParams();
    const navigate = useNavigate();

    const [eventDetails, setEventDetails] = useState(null);
    const [galleries, setGalleries] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState({});
    const [imageLoaded, setImageLoaded] = useState({});
    const [selectedGallery, setSelectedGallery] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [openedImage, setOpenedImage] = useState(null);
    const [error, setError] = useState('');
    const [selectedOption, setSelectedOption] = useState('allphotos');
    const [selectedButton, setSelectedButton] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('authSelToken');
        if (!token) {
            navigate('/authpageselection');
        } else {
            fetchEventDetails();
        }
    }, [event_uuid, navigate]);
    
  
    const fetchEventDetails = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/${event_uuid}`);
            const fetchedGalleries = response.data.galleries;
            setEventDetails(response.data.event);
            setGalleries(fetchedGalleries);
    
            if (fetchedGalleries.length > 0) {
                setSelectedGallery(fetchedGalleries[0].uuid); 
                setSelectedButton(fetchedGalleries[0].name);  
                setImages([{ image_url: fetchedGalleries[0].image }]);
            }
    
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch event details.');
            console.error('Error fetching event details:', err);
        }
    };
    
    
    const handleGalleryClick = (gallery) => {
        setSelectedGallery(gallery.uuid);
        setSelectedButton(gallery.name); 
        setImages([{ image_url: gallery.image }]);
    };
    

    const handleSelected = (galleryUuid, imageId) => {
        setSelected((prevSelected) => {
          
            const gallerySelections = prevSelected[galleryUuid] || {};
            const newSelections = {
                ...gallerySelections,
                [imageId]: !gallerySelections[imageId], 
            };
    
            return {
                ...prevSelected,
                [galleryUuid]: newSelections,
            };
        });
    };
    
    const selectedPhotosCount = Object.values(selected)
        .map((gallerySelections) => Object.values(gallerySelections).filter(Boolean)) 
        .flat().length;  
    
    

    const handleImage = (index) => {
        setCurrentIndex(index);
        setOpenedImage(images[index].image_url);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        setOpenedImage(images[nextIndex].image_url);
    };

    const handlePrevious = () => {
        const prevIndex = (currentIndex === 0 ? images.length - 1 : currentIndex - 1);
        setCurrentIndex(prevIndex);
        setOpenedImage(images[prevIndex].image_url);
    };

    const closeModal = () => {
        setCurrentIndex(null);
        setOpenedImage(null);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = openedImage;
        link.download = `Image_${currentIndex + 1}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSendSelectedPhotos = async () => {
        const selectedImagesData = images
            .filter((image) => selected[image.uuid])
            .map((image) => ({
                image_uuid: image.uuid,
                is_selected: true
            }));

        const token = localStorage.getItem('authSelToken');

        try {
            const response = await axios.post(
                `https://web.snoxpro.com/public/api/v1/selection/submit/${event_uuid}`,
                {
                    event_uuid,
                    selected_images: selectedImagesData
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            Swal.fire({
                icon: 'success',
                title: 'Photos sent successfully!',
                text: response.data.message || 'Your selected photos have been successfully sent.'
            });
        } catch (error) {
            console.error('Error sending selected photos:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error sending photos',
                text: 'There was an issue sending the selected photos. Please try again later.'
            });
        }
    };
    
    

    

    const handleSelectedOption = (option) => {
        setSelectedOption(option);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="maincontainer">
            <div className="navbar">
                <img className="logostyle" src={logo} alt="Logo" />
            </div>
            <div className="galleryContent">
                {eventDetails ? <h1>{eventDetails.title}</h1> : <p>Loading event details...</p>}
            </div>
            {galleries.map((gallery) => (
    <button
        key={gallery.uuid}
        className={`albumnavlink ${selectedButton === gallery.name ? 'selected' : ''}`}  
        onClick={() => handleGalleryClick(gallery)}
    >
        {gallery.name}
    </button>
))}



            <div className="segmented-control">
                <button
                    className={`segment ${selectedOption === 'allphotos' ? 'active' : ''}`}
                    onClick={() => handleSelectedOption('allphotos')}
                >
                    All Photos ({images.length})
                </button>
                <button
                    className={`segment ${selectedOption === 'selectedphotos' ? 'active' : ''}`}
                    onClick={() => handleSelectedOption('selectedphotos')}
                >
                    Selected Photos ({selectedPhotosCount})
                </button>
            </div>

            {selectedOption === 'allphotos' ? (
                <div>
                    <div className="masonry-container">
    {images && images.length > 0 ? (
        images.map((image, index) => (
            <div key={index} className="gallery-item" style={{ position: 'relative' }}>
                <img
                    src={image.image_url}
                    alt={`Image ${index + 1}`}
                    className="img-fluid"
                    style={{
                        cursor: 'pointer',
                        opacity: imageLoaded[image.id] ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out',
                    }}
                    onLoad={() => setImageLoaded((prev) => ({ ...prev, [image.id]: true }))}
                    onClick={() => handleImage(index)}
                />
                {imageLoaded[image.id] && (
                    <div
                        className="checkbox-wrapper-18"
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            zIndex: 10,
                        }}
                    >
                        <div className="round">
                            <input
                                type="checkbox"
                                id={`checkbox-${image.id}`}
                                checked={selected[selectedGallery]?.[image.id] || false}
                                onChange={() => handleSelected(selectedGallery, image.id)}
                            />
                            <label htmlFor={`checkbox-${image.id}`}></label>
                        </div>
                    </div>
                )}
            </div>
        ))
    ) : (
        <p>No images available for this gallery.</p>
    )}
</div>

                </div>
            ) : (
                <div>
                    <div className="masonry-container">
                        {images.filter((image) => selected[selectedGallery]?.[image.id]).map((image, index) => (
                            <div key={index} className="gallery-item" style={{ position: 'relative' }}>
                                <img
                                    src={image.image_url}
                                    alt={`Selected Image ${index + 1}`}
                                    className="img-fluid"
                                />
                            </div>
                        ))}
                    </div>
                    {images.filter((image) => selected[selectedGallery]?.[image.id]).length === 0 && (
                        <p>No selected photos.</p>
                    )}
                </div>
            )}

            {openedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="download-btn" onClick={handleDownload}>
                            <img src={download} alt="" />
                        </button>
                        <button className="close-btn" onClick={closeModal}>
                            &times;
                        </button>
                        <button className="prev-btn" onClick={handlePrevious}>
                            <img src={previousArrow} alt="Previous" />
                        </button>
                        <img src={openedImage} alt="Full Image" className="modal-image" />
                        <button className="next-btn" onClick={handleNext}>
                            <img src={nextArrow} alt="Next" />
                        </button>
                        <button
    className={`selecttick ${selected[images[currentIndex]?.id] ? 'selected' : ''}`}
    onClick={() => handleSelected(selectedGallery, images[currentIndex]?.id)}
>
    <img src={tick} alt="Select" />
</button>


                    </div>
                </div>
            )}

            {selectedPhotosCount > 0 && (
                <div className="senddiv">
                    <button className="floating-button icon-send" onClick={handleSendSelectedPhotos}>
                        Send({selectedPhotosCount})
                    </button>
                </div>
            )}
        </div>
    );
}

export default Gallery;
