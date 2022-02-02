import React, { useState } from 'react';
import { GrayButton } from '../buttons/index';

const CardOneBook = function CardOneBook() {
  const [updateStatus, setUpdateStatus] = useState(false);
  const value = ['Unread', 'Reading', 'Finished'];

  /**
   * Fonction pour valider le changement de statut et faire disparaitre la popup
   */
  const handleChangeStatus = () => {
    setUpdateStatus(false);
  };

  return (
    <div className=" w-full lg:max-w-full lg:flex">
      {/** background image de couverture */}
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" />
      <div className="lg:bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="flex place-content-around ">
          <div className="text-lg">
            <p className="text-gray-900 leading-none">Author : </p>
            <p className="text-gray-900 leading-none">Category : </p>
            <p className="text-gray-900 leading-none">Year : </p>
          </div>
          <div className="text-lg">
            <p className="text-gray-900 leading-none"> Status :</p>
            <div className="my-5">
              <GrayButton
                text="Change Status"
                onClick={() => {
                  setUpdateStatus(true);
                }}
              />
            </div>
          </div>
        </div>
        {updateStatus ? (
          <div className="fixed z-10 inset-0 flex items-center justify-center">
            <div className="bg-gray-700 opacity-20 absolute inset-0 z-40" />
            <div className="py-8 px-14 bg-white border-gray-200 rounded-lg z-50  border-2 shadow-md text-center">
              <div className="mb-6 w-52">
                <p className="mb-4 text-sm text-gray-500">Status</p>
                {/** Ajouter le onchange */}
                <select
                  className="w-full border border-gray-300 rounded-md"
                  name="filter"
                  id="filter"
                >
                  <option value="all">Tous</option>
                  {value.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
                <div className="mt-5">
                  <GrayButton text="Valid" onClick={handleChangeStatus} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default CardOneBook;