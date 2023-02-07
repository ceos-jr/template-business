import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api"
import { useMemo } from "react"

export interface MapsProps {
  zoom: number
  className: string
}

//Create API key here https://console.cloud.google.com/apis/credentials/key
const Maps = ({ zoom, className }: MapsProps) => {
  const libraries = useMemo(() => ["places"], [])

  const mapCenter = useMemo(
    () => ({
      lat: -3.7454971,
      lng: -38.5736588,
    }),
    []
  )
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true,
    }),
    []
  )

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <GoogleMap
      options={mapOptions}
      mapContainerClassName={className}
      zoom={zoom}
      center={mapCenter}
      id="marker-example"
    >
      <MarkerF position={mapCenter} />
    </GoogleMap>
  )
}

export default Maps
