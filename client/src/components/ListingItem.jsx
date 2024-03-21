import React from "react";
import PropTypes from "prop-types";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { PiHouseLineFill } from "react-icons/pi";
import { CgExpand } from "react-icons/cg";
import { FaBath, FaBed } from "react-icons/fa";

function ListingItem({ listing }) {
  return (
    <div className="bg-red-900 shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[360px] ">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-white text-lg font-semibold">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-white" />
            <p className="text-sm text-white truncate w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-white text-sm line-clamp-2">
            {listing.description}
          </p>
          <p className="text-white mt-2 font-semibold ">
            ${listing.offer ? listing.discountPrice : listing.regularPrice}
            {listing.type === "rent" && " / mes"}
          </p>

          <div className="text-white flex gap-4">
            <div className="font-bold text-xs flex items-center">
              <p className="mr-1">
                {listing.type_property === "casa" ||
                listing.type_property === "dpto" ? (
                  <FaBed />
                ) : (
                  <CgExpand />
                )}
              </p>
              <p className="mr-1">
                {listing.type_property === "casa" ||
                listing.type_property === "dpto"
                  ? listing.bedrooms > 1
                    ? `${listing.bedrooms} habitaciones`
                    : `${listing.bedrooms} habitación`
                  : listing.type_property === "terreno" ||
                    listing.type_property === "local" ||
                    listing.type_property === "galpon"
                  ? `${listing.mts_totales} m² totales`
                  : "Información no disponible"}
              </p>
            </div>
            <div className="font-bold text-xs flex items-center">
              <p className="mr-1">
                {listing.type_property === "casa" ||
                listing.type_property === "dpto" ? (
                  <FaBath />
                ) : (
                  <PiHouseLineFill />
                )}
              </p>
              <p className="mr-1">
                {listing.type_property === "casa" ||
                listing.type_property === "dpto"
                  ? listing.bathrooms > 1
                    ? `${listing.bathrooms} baños`
                    : `${listing.bathrooms} baño`
                  : listing.type_property === "terreno" ||
                    listing.type_property === "local" ||
                    listing.type_property === "galpon"
                  ? `${listing.mts_cubiertos} m² cubiertos`
                  : "Información no disponible"}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

ListingItem.propTypes = {
  listing: PropTypes.object.isRequired,
};

export default ListingItem;
