import React from "react";
import { Formik, Form, Field } from "formik";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Email inválido";
  }
  return error;
}

function validateRequired(value) {
  let error;
  if (!value || value.trim() === "") {
    error = "Requerido";
  }
  return error;
}

export const CheckoutForm = ({ handleAddOrder, setOrderPlaced }) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gray-100 mb-6">
        Información de Envío
      </h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          address: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const success = await handleAddOrder(values);
          if (success) {
            setOrderPlaced(true);
          } else {
            alert(
              "Hubo un error al procesar tu pedido. Por favor intenta nuevamente."
            );
          }
          setSubmitting(false);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-100 mb-2"
              >
                Nombre Completo
              </label>
              <Field
                name="name"
                type="text"
                validate={validateRequired}
                className="w-full rounded-lg border border-neutral-700 bg-neutral-800 p-3 text-gray-100 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition"
                placeholder="Juan Pérez"
              />
              {errors.name && touched.name && (
                <div className="mt-2 text-sm text-red-400">{errors.name}</div>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-100 mb-2"
              >
                Email
              </label>
              <Field
                name="email"
                type="email"
                validate={validateEmail}
                className="w-full rounded-lg border border-neutral-700 bg-neutral-800 p-3 text-gray-100 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition"
                placeholder="juan@example.com"
              />
              {errors.email && touched.email && (
                <div className="mt-2 text-sm text-red-400">{errors.email}</div>
              )}
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-semibold text-gray-100 mb-2"
              >
                Dirección
              </label>
              <Field
                name="address"
                as="textarea"
                rows="3"
                validate={validateRequired}
                className="w-full rounded-lg border border-neutral-700 bg-neutral-800 p-3 text-gray-100 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition resize-none"
                placeholder="Calle, número, ciudad, código postal"
              />
              {errors.address && touched.address && (
                <div className="mt-2 text-sm text-red-400">
                  {errors.address}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-amber-500 px-6 py-3 font-bold text-neutral-900 transition hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Procesando..." : "Confirmar Pedido"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
