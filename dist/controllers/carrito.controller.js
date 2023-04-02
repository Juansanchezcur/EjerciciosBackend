"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productosDelCarrito = exports.nuevoCarrito = exports.confirmarCarrito = exports.borrarProductoDelCarrito = exports.borrarCarrito = exports.agregarProductoAlCarrito = void 0;
var _emailService = require("../services/email.service.js");
var _user = require("../controllers/user.controllers");
var _sms = require("../controllers/sms.controller");
var _orders = require("../services/orders.js");
var _carrito = require("../services/carrito.service");
var _products = require("../services/products.service");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var logger = require("../utils/logger");
var nuevoCarrito = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var carritoAgregado;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _carrito.newCart)();
          case 2:
            carritoAgregado = _context.sent;
            res.json({
              msg: "Carrito guardado con Éxito",
              Carrito: carritoAgregado
            });
          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function nuevoCarrito(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.nuevoCarrito = nuevoCarrito;
var productosDelCarrito = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var id, carrito;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return (0, _carrito.getCartById)(id);
          case 4:
            carrito = _context2.sent;
            if (!(carrito.length == 1)) {
              _context2.next = 9;
              break;
            }
            if (carrito[0].productos.length < 1) {
              logger.error("El carrito con id:".concat(id, " todav\xEDa no tiene productos"));
              res.json({
                msg: "El carrito con id:".concat(id, " todav\xEDa no tiene productos")
              });
            } else {
              res.json({
                productos: carrito[0].productos
              });
            }
            _context2.next = 11;
            break;
          case 9:
            logger.error("error, carrito no encontrado");
            return _context2.abrupt("return", res.status(404).json({
              msg: "error, carrito no encontrado"
            }));
          case 11:
            _context2.next = 17;
            break;
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            logger.error("Hubo un error, por favor verifica los datos" + _context2.t0);
            return _context2.abrupt("return", res.status(404).json({
              msg: "Hubo un error, por favor verifica los datos"
            }));
          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return function productosDelCarrito(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.productosDelCarrito = productosDelCarrito;
var agregarProductoAlCarrito = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$params, id_carrito, id_prod, quantity, carrito, producto, productoYaExiste, productoActualizado, CarritoActualizado, nuevoProducto, _CarritoActualizado;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$params = req.params, id_carrito = _req$params.id_carrito, id_prod = _req$params.id_prod;
            quantity = req.body.quantity;
            quantity = Number(quantity);
            if (!(!quantity || quantity < 1)) {
              _context3.next = 7;
              break;
            }
            logger.error("cantidad ingresada menor a 0");
            return _context3.abrupt("return", res.status(400).json({
              msg: "Por favor, ingresa una cantidad mayor a 0 "
            }));
          case 7:
            _context3.next = 9;
            return (0, _carrito.getCartById)(id_carrito);
          case 9:
            carrito = _context3.sent;
            _context3.next = 12;
            return (0, _products.getProductById)(id_prod);
          case 12:
            producto = _context3.sent;
            if (carrito) {
              _context3.next = 16;
              break;
            }
            logger.error("error, carrito no encontrado");
            return _context3.abrupt("return", res.status(404).json({
              msg: "error, carrito no encontrado"
            }));
          case 16:
            if (producto) {
              _context3.next = 19;
              break;
            }
            logger.error("error, producto no encontrado");
            return _context3.abrupt("return", res.status(404).json({
              msg: "error, producto no encontrado"
            }));
          case 19:
            if (!(quantity > producto.stock)) {
              _context3.next = 22;
              break;
            }
            logger.error("La cantidad elegida no es correcta, elija por favor un número entre 1 y el stock máximo");
            return _context3.abrupt("return", res.status(400).json({
              msg: "La cantidad elegida no es correcta, elija por favor un número entre 1 y el stock máximo",
              stock: producto.stock
            }));
          case 22:
            productoYaExiste = carrito[0].productos.find(function (unProducto) {
              return unProducto.description == producto[0].description;
            });
            if (!productoYaExiste) {
              _context3.next = 34;
              break;
            }
            console.log("el producto ya existía en el carrito");
            productoActualizado = {
              _id: producto[0]._id,
              quantity: productoYaExiste.quantity + quantity,
              description: producto[0].description,
              photo: producto[0].photo,
              price: producto[0].price
            };
            carrito[0].productos[id_prod] = productoActualizado;
            console.log(JSON.stringify(carrito[0].productos) + "djglkasdgjaslkgjak");
            _context3.next = 30;
            return (0, _carrito.updateCart)(id_carrito, {
              $set: {
                productos: carrito[0].productos[id_prod]
              }
            }, {
              "new": true
            });
          case 30:
            CarritoActualizado = _context3.sent;
            res.json({
              msg: "Producto guardado con Éxito",
              producto_actualizado: productoActualizado,
              Carrito: CarritoActualizado
            });
            _context3.next = 40;
            break;
          case 34:
            nuevoProducto = {
              _id: producto[0]._id,
              quantity: quantity,
              description: producto[0].description,
              photo: producto[0].photo,
              price: producto[0].price
            };
            carrito[0].productos.push(nuevoProducto);
            _context3.next = 38;
            return (0, _carrito.updateCart)(id_carrito, {
              $set: {
                productos: carrito[0].productos
              }
            }, {
              "new": true
            });
          case 38:
            _CarritoActualizado = _context3.sent;
            res.json({
              msg: "Producto guardado con Éxito",
              producto: nuevoProducto,
              Carrito: _CarritoActualizado
            });
          case 40:
            _context3.next = 46;
            break;
          case 42:
            _context3.prev = 42;
            _context3.t0 = _context3["catch"](0);
            logger.error("Hubo un error, por favor verifica los datos " + _context3.t0);
            return _context3.abrupt("return", res.status(404).json({
              msg: "Hubo un error, por favor verifica los datos"
            }));
          case 46:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 42]]);
  }));
  return function agregarProductoAlCarrito(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.agregarProductoAlCarrito = agregarProductoAlCarrito;
var borrarCarrito = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, carritoBorrado;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return (0, _carrito.deleteCart)(id);
          case 4:
            carritoBorrado = _context4.sent;
            if (!carritoBorrado) {
              _context4.next = 9;
              break;
            }
            res.json({
              msg: "Borrando carrito con id ".concat(id),
              Carrito: carritoBorrado
            });
            _context4.next = 11;
            break;
          case 9:
            logger.error("error, carrito no encontrado");
            return _context4.abrupt("return", res.status(404).json({
              msg: "error, carrito no encontrado"
            }));
          case 11:
            _context4.next = 17;
            break;
          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            logger.error("Hubo un error, por favor verifica los datos");
            return _context4.abrupt("return", res.status(404).json({
              msg: "Hubo un error, por favor verifica los datos"
            }));
          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 13]]);
  }));
  return function borrarCarrito(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.borrarCarrito = borrarCarrito;
var borrarProductoDelCarrito = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$params2, id_carrito, id_prod, carritoElegido, productoElegido, CarritoActualizado;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$params2 = req.params, id_carrito = _req$params2.id_carrito, id_prod = _req$params2.id_prod;
            _context5.next = 4;
            return (0, _carrito.getCartById)(id_carrito);
          case 4:
            carritoElegido = _context5.sent;
            if (carritoElegido) {
              _context5.next = 8;
              break;
            }
            logger.error("error, carrito no encontrado");
            return _context5.abrupt("return", res.status(404).json({
              msg: "error, carrito no encontrado"
            }));
          case 8:
            productoElegido = carritoElegido[0].productos.find(function (unProducto) {
              return unProducto._id == id_prod;
            });
            if (!(productoElegido == undefined)) {
              _context5.next = 12;
              break;
            }
            logger.error("error, producto no encontrado");
            return _context5.abrupt("return", res.status(404).json({
              msg: "error, producto no encontrado"
            }));
          case 12:
            carritoElegido[0].productos.splice(productoElegido, 1);
            _context5.next = 15;
            return (0, _carrito.updateCart)({
              _id: id_carrito
            }, {
              productos: carritoElegido[0].productos
            }, {
              "new": true
            });
          case 15:
            CarritoActualizado = _context5.sent;
            res.json({
              msg: "Borrando producto ".concat(id_prod, " del carrito ").concat(id_carrito),
              carrito_actualizado: CarritoActualizado
            });
            _context5.next = 23;
            break;
          case 19:
            _context5.prev = 19;
            _context5.t0 = _context5["catch"](0);
            logger.error("Hubo un error, por favor verifica los datos" + _context5.t0);
            return _context5.abrupt("return", res.status(404).json({
              msg: "Hubo un error, por favor verifica los datos"
            }));
          case 23:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 19]]);
  }));
  return function borrarProductoDelCarrito(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.borrarProductoDelCarrito = borrarProductoDelCarrito;
var confirmarCarrito = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var id_carrito, carrito, listadoDeproductos, hostMessage, userMessage, order;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id_carrito = req.params.id_carrito;
            _context6.next = 4;
            return (0, _carrito.getCartById)(id_carrito);
          case 4:
            carrito = _context6.sent;
            logger.info(carrito);
            if (req.user != undefined) {
              //Envío de Whatsapp
              listadoDeproductos = carrito[0].productos.map(function (producto) {
                return "ID: ".concat(producto._id, "      Cantidad ").concat(producto.quantity, " \n");
              });
              hostMessage = "Carrito confirmado:\n \n Productos: \n\n".concat(listadoDeproductos);
              userMessage = "Querido ".concat(req.user.username, ":\n \nQued\xF3 confirmado su carrito con los siguientes productos: \n\n").concat(listadoDeproductos, "\n\n A la brevedad nos contactaremos con usted");
              (0, _sms.sendWhattsapToHost)(hostMessage), (0, _sms.sendWhatsappToClient)(userMessage),
              //Envío de Email
              _emailService.message.text = "Carrito confirmado:\n \n Productos: \n\n".concat(listadoDeproductos), _emailService.message.subject = "Carrito confirmado Usuario: ".concat(req.user.username);
              (0, _user.sendMailEthereal)();
            } else {
              logger.error("Por favor logueate antes de confirmar el pedido");
            }
            //borrar Carrito
            _context6.next = 9;
            return (0, _carrito.deleteCart)(id_carrito);
          case 9:
            //agregar Orden
            order = {
              usuario: req.user.username,
              productos: carrito[0].productos,
              estado: "generada"
            };
            (0, _orders.newOrder)(order);
            res.json({
              msg: "Confirmación de compra exitosa",
              Carrito: id_carrito
            });
            _context6.next = 18;
            break;
          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](0);
            logger.error("Hubo un error, por favor verifica los datos " + _context6.t0);
            return _context6.abrupt("return", res.status(404).json({
              msg: "Hubo un error, por favor verifica los datos"
            }));
          case 18:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 14]]);
  }));
  return function confirmarCarrito(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.confirmarCarrito = confirmarCarrito;